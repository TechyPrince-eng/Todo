function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text === '') return;
  
    const li = document.createElement('li');
    li.textContent = text;
  
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
  
    input.value = '';
  }
  