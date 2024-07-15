
import os
from typing import List, Optional

import certifi
import motor.motor_asyncio
from bson import ObjectId
from fastapi import Body, FastAPI, HTTPException, status
from fastapi.responses import Response
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from pydantic.functional_validators import BeforeValidator
from pymongo import ReturnDocument
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from typing_extensions import Annotated

ca = certifi.where()
uri = "MONGODB_URL" + "&tlsCAFile=" + ca

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
    summary="A sample application showing how to use FastAPI to add a ReST API to a MongoDB collection.",
)


db = client.get_database("InAbleDB")
job_post_collection = db.get_collection("job_posts")

PyObjectId = Annotated[str, BeforeValidator(str)]

class JobPostModel(BaseModel):
    # id: Optional[PyObjectId] = Field(alias="_id", default=None)
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
    reqLicens: Optional[str]
    
class JobPostCollection(BaseModel):
    job_posts: List[JobPostModel]
    
@app.get(
    "/job_posts/",
    response_description="List all job posts",
    response_model=JobPostCollection,
    response_model_by_alias=False,
)
async def list_job_posts():
    """
    List all of the student data in the database.

    The response is unpaginated and limited to 1000 results.
    """
    return JobPostCollection(job_posts=job_post_collection.find())

# uvicorn api:app --reload