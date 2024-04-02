document.addEventListener('DOMContentLoaded', () => {
    const class112Form = document.getElementById('class112Form');
    const class122Form = document.getElementById('class122Form');

    const class112Chapters = JSON.parse(localStorage.getItem('class112Chapters')) || [];
    const class122Chapters = JSON.parse(localStorage.getItem('class122Chapters')) || [];

    const addChapter = (classNum, chapterInput) => {
        const chapter = chapterInput.trim();
        if (chapter !== '') {
            const chapters = classNum === 112 ? class112Chapters : class122Chapters;
            chapters.push(chapter);
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const deleteChapter = (classNum, index) => {
        const chapters = classNum === 112 ? class112Chapters : class122Chapters;
        chapters.splice(index, 1);
        localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
        renderChapters(classNum);
    };

    const editChapter = (classNum, index) => {
        const editedChapter = prompt('Edit Chapter:', classNum === 112 ? class112Chapters[index] : class122Chapters[index]);
        if (editedChapter !== null) {
            const chapters = classNum === 112 ? class112Chapters : class122Chapters;
            chapters[index] = editedChapter.trim();
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const renderChapters = (classNum) => {
        const chaptersList = document.getElementById(`class${classNum}ChaptersList`);
        chaptersList.innerHTML = '';
        const chapters = classNum === 112 ? class112Chapters : class122Chapters;
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

    class112Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput112 = document.getElementById('chapterInput112').value;
        addChapter(112, chapterInput112);
        document.getElementById('chapterInput112').value = '';
    });

    class122Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput122 = document.getElementById('chapterInput122').value;
        addChapter(122, chapterInput122);
        document.getElementById('chapterInput122').value = '';
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

    renderChapters(112);
    renderChapters(122);
});
