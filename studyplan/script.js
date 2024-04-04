// Define study plan data
const studyPlan = [
  {
    phase: "Phase 1: Understanding the Syllabus and Assessing Knowledge (Month 1)",
    weeks: [
      {
        week: "Week 1",
        topics: [
          "Introduction to Biology",
          "Diversity in the Living World (Classification, Plant Kingdom, Animal Kingdom)",
          "Physical World and Measurement",
          "Kinematics",
          "Some Basic Concepts of Chemistry",
          "Structure of Atom"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Cell: The Unit of Life",
          "Cell Cycle and Cell Division",
          "Laws of Motion",
          "Work, Energy, and Power",
          "Classification of Elements and Periodicity in Properties",
          "Chemical Bonding and Molecular Structure"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Biomolecules",
          "Cell Structure and Function",
          "Motion of System of Particles and Rigid Body",
          "Gravitation",
          "States of Matter: Gases and Liquids",
          "Thermodynamics"
        ]
      },
      {
        week: "Week 4",
        topics: [
          "Plant Physiology (Transport in Plants, Photosynthesis)",
          "Properties of Bulk Matter",
          "Thermodynamics (contd.)",
          "Equilibrium"
        ]
      }
    ]
  },
  {
    phase: "Phase 2: Building Foundations (Months 2-3)",
    weeks: [
      {
        week: "Week 5-8",
        topics: [
          "Human Physiology (Digestion and Absorption, Breathing and Exchange of Gases, Body Fluids and Circulation)",
          "Electrostatics",
          "Current Electricity",
          "Redox Reactions",
          "Hydrogen, s-block elements"
        ]
      },
      {
        week: "Week 9-12",
        topics: [
          "Human Physiology (Excretory Products and their Elimination, Locomotion and Movement, Neural Control and Coordination)",
          "Magnetic Effects of Current and Magnetism",
          "Electromagnetic Induction and Alternating Currents",
          "p-block elements",
          "Organic Chemistry: Some Basic Principles and Techniques"
        ]
      }
    ]
  },
  {
    phase: "Phase 3: Conceptual Understanding and Practice (Months 4-8)",
    weeks: [
      {
        week: "Week 13-20",
        topics: [
          "Reproduction (Sexual Reproduction in Flowering Plants, Human Reproduction)",
          "Genetics and Evolution (Principles of Inheritance and Variation)",
          "Electromagnetic Waves",
          "Optics",
          "Hydrocarbons",
          "Environmental Chemistry"
        ]
      },
      {
        week: "Week 21-28",
        topics: [
          "Biology in Human Welfare (Human Health and Diseases, Microbes in Human Welfare)",
          "Biotechnology and its Applications",
          "Dual Nature of Radiation and Matter",
          "Atoms and Nuclei",
          "Solid State",
          "Solutions"
        ]
      }
    ]
  },
  {
    phase: "Phase 4: Revision and Mock Tests (Months 9-11)",
    weeks: [
      {
        week: "Week 29-36",
        topics: [
          "Revise all subjects systematically, focusing on weak areas and important topics.",
          "Take regular mock tests and solve previous years' question papers to assess your preparation level and improve time management skills."
        ]
      }
    ]
  },
  {
    phase: "Phase 5: Final Preparation (Month 12)",
    weeks: [
      {
        week: "Week 37-40",
        topics: [
          "Intensive revision of all subjects, emphasizing important topics, formulas, and diagrams."
        ]
      },
      {
        week: "Week 41-43",
        topics: [
          "Solve as many sample papers and previous years' question papers as possible for exam practice."
        ]
      },  
    ]
  }
];

// Load topics from local storage or use default data
let topics = JSON.parse(localStorage.getItem('topics')) || [];

// Render study plan topics
function renderTopics() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = '';
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

// Toggle topic's done status
function toggleDone(topic) {
  const index = topics.indexOf(topic);
  if (index === -1) {
    topics.push(topic);
  } else {
    topics.splice(index, 1);
  }
  localStorage.setItem('topics', JSON.stringify(topics));
  renderTopics();
}

// Initial render
renderTopics();
