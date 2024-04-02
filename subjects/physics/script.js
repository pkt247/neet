document.addEventListener('DOMContentLoaded', () => {
    const class11Form = document.getElementById('class11Form');
    const class12Form = document.getElementById('class12Form');

    const class11Chapters = JSON.parse(localStorage.getItem('class11Chapters')) || [];
    const class12Chapters = JSON.parse(localStorage.getItem('class12Chapters')) || [];

    const addChapter = (classNum, chapterInput) => {
        const chapter = chapterInput.trim();
        if (chapter !== '') {
            const chapters = classNum === 11 ? class11Chapters : class12Chapters;
            chapters.push(chapter);
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const deleteChapter = (classNum, index) => {
        const chapters = classNum === 11 ? class11Chapters : class12Chapters;
        chapters.splice(index, 1);
        localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
        renderChapters(classNum);
    };

    const editChapter = (classNum, index) => {
        const editedChapter = prompt('Edit Chapter:', classNum === 11 ? class11Chapters[index] : class12Chapters[index]);
        if (editedChapter !== null) {
            const chapters = classNum === 11 ? class11Chapters : class12Chapters;
            chapters[index] = editedChapter.trim();
            localStorage.setItem(`class${classNum}Chapters`, JSON.stringify(chapters));
            renderChapters(classNum);
        }
    };

    const renderChapters = (classNum) => {
        const chaptersList = document.getElementById(`class${classNum}ChaptersList`);
        chaptersList.innerHTML = '';
        const chapters = classNum === 11 ? class11Chapters : class12Chapters;
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

    class11Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput11 = document.getElementById('chapterInput11').value;
        addChapter(11, chapterInput11);
        document.getElementById('chapterInput11').value = '';
    });

    class12Form.addEventListener('submit', (event) => {
        event.preventDefault();
        const chapterInput12 = document.getElementById('chapterInput12').value;
        addChapter(12, chapterInput12);
        document.getElementById('chapterInput12').value = '';
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

    renderChapters(11);
    renderChapters(12);
});
