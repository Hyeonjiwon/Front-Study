const input_title = document.getElementById('new-task-title');
const input_content = document.getElementById('new-task-content');
const plus_btn = document.getElementById('plus-btn');
const clear_btn = document.getElementById('clear-btn');
const task_table_body = document.getElementById('task-table-body');

let todo_items = [];
let checked;

console.log(getCurrentDate());


/********** 버튼 이벤트 **********/

// 내용 입력 후 enter하면 add
input_content.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        // 입력값 validation check
        if (!input_title.value) {
            alert("Error : check input title");
        }

        if (!input_content.value) {
            alert("Error : check input content");
        }

        if (input_title.value && input_content.value) {
            // todo 추가
            addTodo(checked, input_title.value, input_content.value, getCurrentDate());
            // title, content 초기화
            eraseText();
        }
    }
});


// 추가 버튼 클릭(+enter)
plus_btn.addEventListener('click', function() {
    // 입력값 validation check
    if (!input_title.value) {
         alert("Error : check input title");
    }

    if (!input_content.value) {
        alert("Error : check input content");
    }

    if (input_title.value && input_content.value) {
        // todo 추가
        addTodo(checked, input_title.value, input_content.value, getCurrentDate());
        // title, content 초기화
        eraseText(); 
    }
});

// clear 버튼
clear_btn.addEventListener('click', function() {
    if(todo_items.length > 0) {
        allClearTodo(todo_items);
    }
});


/********** 함수 **********/
// add
function addTodo(checked, title, content, date) {
    checked = this.checked;
    // todo 객체 리터럴 
    const todo = {
        checked,
        title,
        content,
        date,
    };

    todo_items.push(todo);
    console.log(todo_items);

    // todo 갯수 제한 : 11개 부터 입력 x, 경고
    if (todo_items.length <= 10) {
        renderTodo(todo_items);
    } 
    else { 
        alert("최대 10개까지 입력 가능 합니다.");
        todo_items.pop(); // add 된거 삭제
    }
}


// todo - html 렌더링
function renderTodo(todo_items) {
    if(todo_items.length > 0) {
        todo_items.forEach(function(task, index) {
            let task_table_body_tr = task_table_body.getElementsByTagName('tr')[index];
            console.log("renderTodo true :::: " + task.checked);
            task_table_body_tr.getElementsByTagName('td')[0].innerHTML = '<input type="checkbox" onClick="checkTodo(this, ' + index + ')"' + task.checked + ' />';
            task_table_body_tr.getElementsByTagName('td')[1].innerHTML = task.title;
            task_table_body_tr.getElementsByTagName('td')[2].innerHTML = task.content;
            task_table_body_tr.getElementsByTagName('td')[3].innerHTML = task.date;
            task_table_body_tr.getElementsByTagName('td')[4].innerHTML = '<button type="button" id = "edit-btn-' + index + '"' + ' class="btn btn-outline-success" onClick="replyClick(this.id)">Edit</button>';
            task_table_body_tr.getElementsByTagName('td')[5].innerHTML = '<button type="button" id = "delete-btn-' + index + '"' + ' class="btn btn-outline-danger" onClick="replyClick(this.id)">X</button>';
        
            task_table_body_tr.getElementsByTagName('td')[1].setAttribute('contenteditable', 'false');
            task_table_body_tr.getElementsByTagName('td')[2].setAttribute('contenteditable', 'false');
        });
    }

    else {
        eraseAllTodo();
    }
}

// table 지우기
function eraseAllTodo() {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 6; j++) {
            task_table_body.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].innerHTML = "";
            task_table_body.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.textDecoration = 'none';
        }
    }
}

// 수정, 삭제 버튼
function replyClick(click_id) {
    let index = click_id.split('-')[2];
    console.log(document.getElementById(click_id).innerText);

    switch(click_id.split('-')[0]) {
        case 'edit':
            if (document.getElementById(click_id).innerText === 'Edit') {
                editTodo(index, click_id);  // 수정
            } else {
                saveTodo(index, click_id); // 저장
            }
            break;

        case 'delete':
            deleteTodo(index);  // 삭제
            break;

        default:
            console.log("!! default");
    }
}


// all clear 
function allClearTodo(todo_items) {
    todo_items.length = 0 // todo_items List 초기화
    renderTodo(todo_items); // 화면 초기화
}

// delete
// task 삭제
function deleteTodo(index) {
    todo_items.splice(index, 1); // 리스트에서 지우고
    eraseAllTodo(); // 화면 다 지우고    
    renderTodo(todo_items); // 다시 render
}

// edit 
// edit 버튼 -> save, td 수정, save 클릭, 다시 edit
function editTodo(index, click_id) {
    document.getElementById(click_id).innerText = 'Save'; // 버튼 내용 변경

    let task_table_body_tr = task_table_body.getElementsByTagName('tr')[index];
    task_table_body_tr.getElementsByTagName('td')[1].setAttribute('contenteditable', 'true');
    task_table_body_tr.getElementsByTagName('td')[2].setAttribute('contenteditable', 'true');

    task_table_body_tr.getElementsByTagName('td')[1].focus();
    task_table_body_tr.getElementsByTagName('td')[2].focus();
}

// save
function saveTodo(index, click_id) {
    document.getElementById(click_id).innerText = 'Edit'; // 버튼 내용 변경

    let task_table_body_tr = task_table_body.getElementsByTagName('tr')[index];

    todo_items[index].title = task_table_body_tr.getElementsByTagName('td')[1].innerHTML;
    todo_items[index].content = task_table_body_tr.getElementsByTagName('td')[2].innerHTML;
    todo_items[index].date = getCurrentDate();

    renderTodo(todo_items);
}

// checked
// 할 일 취소선
function checkTodo(check_box, index) { 
    let task_table_body_tr = task_table_body.getElementsByTagName('tr')[index];
    console.log("checkTodo " + check_box.checked);
    console.log("!!" + todo_items[index].checked); 

    // checked 취소선
    if (check_box.checked) {
        console.log("checkTodo true " + check_box.checked);
        task_table_body_tr.getElementsByTagName('td')[1].style.textDecoration = 'line-through';
        task_table_body_tr.getElementsByTagName('td')[2].style.textDecoration = 'line-through';
        task_table_body_tr.getElementsByTagName('td')[3].style.textDecoration = 'line-through';
    }
    else {
        console.log("checkTodo false " + check_box.checked);
        task_table_body_tr.getElementsByTagName('td')[1].style.textDecoration = 'none';
        task_table_body_tr.getElementsByTagName('td')[2].style.textDecoration = 'none';
        task_table_body_tr.getElementsByTagName('td')[3].style.textDecoration = 'none';;
    }
}

// input 초기화
function eraseText() {
    // title, content 초기화
    input_title.value = "";
    input_content.value = "";
}

// 현재 날짜 시간 구하기, yyyy-mm-dd hh:mm
function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    let day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

    return year + "-" + month + "-" + day + " " + hour + ":" + minutes;
}