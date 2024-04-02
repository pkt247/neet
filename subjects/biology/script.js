document.addEventListener('DOMContentLoaded', () => {
    const class111Form = document.getElementById('class111Form');
    const class121Form = document.getElementById('class121Form');

    const class111Chapters = JSON.parse(localStorage.getItem('class111Chapters')) || [];
    const class121Chapters = JSON.parse(localStorage.getItem('class121Chapters')) || [];

    const addChapter = (classNum, chapterInput) => {
        const chapter = chapterInput.trim();
        if (chapter !== '') {
            const chapters = classNum === 111 ? class111Chapters : class121Chapters;
            chapters.push(chapter);
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const deleteChapter = (classNum, index) => {
        const chapters = classNum === 111 ? class111Chapters : class121Chapters;
        chapters.splice(index, 1);
        localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
        renderChapters(classNum);
    };

    const editChapter = (classNum, index) => {
        const editedChapter = prompt('Edit Chapter:', classNum === 111 ? class111Chapters[index] : class121Chapters[index]);
        if (editedChapter !== null) {
            const chapters = classNum === 111 ? class111Chapters : class121Chapters;
            chapters[index] = editedChapter.trim();
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const renderChapters = (classNum) => {
        const chaptersList = document.getElementById(`class${classNum}ChaptersList`);
        chaptersList.innerHTML = '';
        const chapters = classNum === 111 ? class111Chapters : class121Chapters;
        chapters.forEach((chapter, index) => {
            const chapterElement = document.createElement('div');
            chapterElement.classList.add('chapter-item');
            chapterElement.innerHTML = `
                <p class="text-gray-800">${chapter}</p>
                <div class="flex justify-end mt-2">
                    <button class="text-blue-500 mr-2 hover:text-blue-700 focus:outline-none" data-action="edit" data-class="${classNum}" data-index="${index}">Edit</button>
                    <button class="text-red-500 hover:text-red-700 focus:outline-none" data-action="delete" data-class="${classNum}" data-index="${index}">Delete</button>
                </div>
            `;
            chaptersList.appendChild(chapterElement);
        });
    };

    class111Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput111 = document.getElementById('chapterInput111').value;
        addChapter(111, chapterInput111);
        document.getElementById('chapterInput111').value = '';
    });

    class121Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput121 = document.getElementById('chapterInput121').value;
        addChapter(121, chapterInput121);
        document.getElementById('chapterInput121').value = '';
    });

    // Add event delegation for dynamically created buttons
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'button') {
            const action = target.getAttribute('data-action');
            const classNum = parseInt(target.getAttribute('data-class'));
            const index = parseInt(target.getAttribute('data-index'));
            if (action === 'edit') {
                editChapter(classNum, index);
            } else if (action === 'delete') {
                deleteChapter(classNum, index);
            }
        }
    });

    renderChapters(111);
    renderChapters(121);
});
