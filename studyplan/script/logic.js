// Combined Study Plan
const studyPlan = [
  {
    phase: "Phase 1: Understanding the Syllabus and Assessing Knowledge (Month 1)",
    weeks: p1.map((week, index) => ({ week: `Week ${index + 1}`, topics: week }))
  },
  {
    phase: "Phase 2: Biology completion (Months 2-3)",
    weeks: p2.map((week, index) => ({ week: `Week ${5 + index * 2}-${6 + index * 2}`, topics: week }))
  },
  {
    phase: "Phase 3: Physics Practice and Chemistry (Months 4-10)",
    weeks: [
      { week: "Week 13-17", topics: w13_17 },
      { week: "Week 18-22", topics: w18_22 },
      { week: "Week 23-27", topics: w23_27 },
      { week: "Week 28-32", topics: w28_32 },
      { week: "Week 33-37", topics: w33_37 }
    ]
  },
  {
    phase: "Phase 4: Revision and Mock Tests (Months 11-12)",
    weeks: [
      { week: "Week 38-42", topics: w38_42 },
      { week: "Week 43-45", topics: w43_45 }
    ]
  }
];

// Initialize topics with pre-checked topics
let topics = [];
preCheckedTopics.forEach(topic => {
  if (!topics.includes(topic)) {
    topics.push(topic);
  }
});

// Render study plan topics
function renderTopics() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = ''; // Clear the list before re-rendering
  studyPlan.forEach(phase => {
    const phaseItem = document.createElement('div');
    phaseItem.classList.add('phase-card');
    phaseItem.innerHTML = `<h3>${phase.phase}</h3>`;
    topicsList.appendChild(phaseItem);
    phase.weeks.forEach(week => {
      const weekItem = document.createElement('div');
      weekItem.classList.add('week-card');
      weekItem.innerHTML = `<h4>${week.week}</h4>`;
      phaseItem.appendChild(weekItem);
      week.topics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.classList.add('topic-card');
        const done = topics.includes(topic);
        topicItem.innerHTML = `
          <input type="checkbox" class="checkbox" ${done ? 'checked' : ''}>
          <label>${topic}</label>
        `;
        topicItem.querySelector('.checkbox').addEventListener('change', () => toggleDone(topic));
        weekItem.appendChild(topicItem);
      });
    });
  });
}

function toggleDone(topic) {
  const index = topics.indexOf(topic);
  if (index === -1) {
    topics.push(topic); // Add topic if not present
  } else {
    topics.splice(index, 1); // Remove topic if present
  }
  renderTopics(); // Re-render the topics
}

// Initial render of topics
renderTopics();
