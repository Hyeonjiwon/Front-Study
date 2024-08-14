import os
from typing import List, Optional
import certifi
import motor.motor_asyncio
from bson import ObjectId
from dotenv import load_dotenv  # Add this import
from fastapi import Depends, Body, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from pydantic.functional_validators import BeforeValidator
from pymongo import ReturnDocument
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from typing_extensions import Annotated

# Load environment variables from .env file
load_dotenv()

# Get the MongoDB URI from environment variables
ca = certifi.where()
base_uri = os.getenv("MONGODB_URI")
if not base_uri:
    raise ValueError("MONGODB_URI environment variable is not set")

uri = f"{base_uri}?retryWrites=true&w=majority&appName=Cluster0&tlsCAFile={ca}"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

app = FastAPI(
    title="Job Posts API",
    summary="A sample application showing how to use FastAPI to add a REST API to a MongoDB collection.",
)

# CORS 설정 추가
origins = os.getenv("CORS_ORIGINS", "").split(",")
if not origins:
    origins = ["http://localhost:4000",
               "http://localhost:1234"]  # Default origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # origins 리스트에 있는 도메인에서 오는 요청을 허용
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드를 허용
    allow_headers=["*"],  # 모든 HTTP 헤더를 허용
)

db = client.get_database("InAbleDB")
job_post_collection = db.get_collection("job_posts")

PyObjectId = Annotated[str, BeforeValidator(str)]


class JobPostModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    busplaName: str
    cntctNo: str
    compAddr: str
    empType: str
    enterType: str
    jobNm: str
    offerregDt: str
    regDt: str
    regagnName: str
    reqCareer: str
    reqEduc: str
    rno: str
    rnum: str
    salary: str
    salaryType: str
    termDate: str
    reqMajor: Optional[str]
    envBothHands: str
    envEyesight: str
    envLiftPower: str
    envLstnTalk: str
    envStndWalk: str
    # envHandwork: str
    reqLicens: Optional[str]
    latitude: str
    longitude: str


class JobPostCollection(BaseModel):
    job_posts: List[JobPostModel]


# 근무위치compAddr, 모집직종 jobNm, 고용형태 empType, 시력 envEyesight, 드는힘 envLiftPower, 양손 envBothHands
class SearchCriteria(BaseModel):
    compAddr: Optional[str] = None
    jobNm: Optional[str] = None
    empType: Optional[str] = None
    envEyesight: Optional[str] = None
    envLiftPower: Optional[str] = None
    envBothHands: Optional[str] = None


@app.get(
    "/job_posts/",
    response_description="List all job posts",
    response_model=JobPostCollection,
    response_model_by_alias=False,
)
async def list_job_posts():
    job_posts = list(job_post_collection.find())
    return JobPostCollection(job_posts=job_posts)


@app.get(
    "/job_posts/search",
    response_description="Search job posts by criteria",
    response_model=JobPostCollection,
    response_model_by_alias=False,
)
async def search_job_posts(criteria: SearchCriteria = Depends()):
    query = {}

    # 근무 위치 (compAddr)
    if criteria.compAddr:
        query["compAddr"] = {
            "$regex": criteria.compAddr} if criteria.compAddr != "-" else "-"

    # 모집 직종 (jobNm)
    if criteria.jobNm:
        query["jobNm"] = criteria.jobNm

    # 고용 형태 (empType)
    if criteria.empType:
        query["empType"] = criteria.empType

    # 시력 (envEyesight)
    if criteria.envEyesight:
        query["envEyesight"] = criteria.envEyesight

    # 드는 힘 (envLiftPower)
    if criteria.envLiftPower:
        query["envLiftPower"] = criteria.envLiftPower

    # 양손 (envBothHands)
    if criteria.envBothHands:
        query["envBothHands"] = criteria.envBothHands

    # MongoDB에서 해당 조건에 맞는 문서 검색
    job_posts = list(job_post_collection.find(query))
    return JobPostCollection(job_posts=job_posts)

# uvicorn main:app --reload
