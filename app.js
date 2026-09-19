const subjects = {

    6: [
        "Mathematics",
        "Science",
        "English",
        "Hindi",
        "Social Science"
    ],

    7: [
        "Mathematics",
        "Science",
        "English",
        "Hindi",
        "Social Science"
    ],

    8: [
        "Mathematics",
        "Science",
        "English",
        "Hindi",
        "Social Science"
    ],

    9: [
        "Mathematics",
        "Science",
        "English",
        "Hindi",
        "Social Science"
    ],

    10: [
        "Mathematics",
        "Science",
        "English",
        "Hindi",
        "Social Science"
    ],

    11: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Computer Science",
        "English"
    ],

    12: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Computer Science",
        "English"
    ]

};


function openClass(classNumber) {

    document.getElementById("classes").style.display = "none";

    document.getElementById("study-area").style.display = "block";

    document.getElementById("class-title").innerText =
        "Class " + classNumber + " - Subjects";

    let subjectArea = document.getElementById("subjects");

    subjectArea.innerHTML = "";

    subjects[classNumber].forEach(function(subject) {

        subjectArea.innerHTML += `
            <div class="subject"
                 onclick="showNotes('${subject}', ${classNumber})">

                <h3>📚 ${subject}</h3>

                <p>
                    Syllabus • Chapters • Notes • Quiz
                </p>

            </div>
        `;

    });

    window.scrollTo(0, 0);
}


function showNotes(subject, classNumber) {

    let content = document.getElementById("content");

    content.innerHTML = `

        <div class="content-box">

            <h3>
                Class ${classNumber} - ${subject}
            </h3>

            <h4>📋 Syllabus</h4>

            <p>
                Complete syllabus and chapter-wise
                study material will be available here.
            </p>

            <br>

            <h4>📖 Notes</h4>

            <p>
                Chapter-wise easy notes will be provided
                for students.
            </p>

            <br>

            <h4>📝 Practice</h4>

            <p>
                Important questions and MCQs
                will be available here.
            </p>

            <br>

            <button class="hero button"
                    onclick="startQuiz()">
                Start Quiz 🧠
            </button>

        </div>

    `;

    content.scrollIntoView({
        behavior: "smooth"
    });
}


function backToClasses() {

    document.getElementById("study-area").style.display = "none";

    document.getElementById("classes").style.display = "block";

}


function goToClasses() {

    document.getElementById("classes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showLogin() {

    alert(
        "Login / Signup page coming soon!"
    );

}


function startQuiz() {

    alert(
        "Quiz section coming soon!"
    );

}