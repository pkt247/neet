const studyPlan = [
  {
    phase: "Phase 1: Understanding the Syllabus and Assessing Knowledge (Month 1)",
    weeks: [
      {
        week: "Week 1",
        topics: [
          //"Physical World",
          "The Living World",
          "Units and Measurement",
          "Biological Classification",
          "Some Basic Concepts of Chemistry",
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Plant Kingdom",
          "Vectors",
          "Animal Kingdom",
        ]
      },
      {
        week: "Week 3",
        topics: [
          // "Kinematics",
          "Motion in Straight Line",
          "Motion in Plane",
          "Structure of Atom",
          "Cell :The unit of life",

        ]
      },
      {
        week: "Week 4",
        topics: [
          "Laws of Motion",
          "Cell Cycle and Cell Division",
          "Work, Energy, and Power",
          
        ]
      }
    ]
  },
  {
    phase: "Phase 2: Building Foundations (Months 2-3)",
    weeks: [
      {
        week: "Week 5-6",
        topics: [
          "Motion of System of Particles and Rigid Body",
          "Chemical Bonding and Molecular Structure",
          "Classification of Elements and Periodicity in Properties",
          "Biomolecule",
          // "Hydrogen", 
          "Thermodynamics",

        ]
      }, {
        week: "Week 7-8",
        topics: [
          "Electrostatics",
          "Current Electricity",
          "Redox Reactions",
          "Equilibrium",
          "Oscillations and waves",
          // "s-block elements"
        ]
      },
      {
        week: "Week 9-10",
        topics: [
          "Amines",
          // "States of Matter: Gases and Liquids",
          // Human Physiology 
          "Excretory Products and their Elimination",
          // "Digestion and Absorption",
          "Properties of Bulk Matter",

          "Magnetic Effects of Current and Magnetism",
          "Electromagnetic Induction and Alternating Currents",

        ]
      },
      {
        week: "Week 11-12",
        topics: [
          "p-block elements",
          "The d-and f-Block Elements",
          "Mechanical Properties of Fluids",
          "Thermal Properties of Matter",
          "Kinetic Theory of Gases ",

        ]
      }
    ]
  },
  {
    phase: "Phase 3: Conceptual Understanding and Practice (Months 4-10)",
    weeks: [
      {
        week: "Week 13-17",
        topics: [
          //Human Physiology 
          "Locomotion and Movement",
          "Neural Control and Coordination",
          "Structural Organisation in Animals",
          "Organic Chemistry: Some Basic Principles and Techniques",

          "Electromagnetic Waves",

          // Reproduction 
          "Sexual Reproduction in Flowering Plants",
          "Human Reproduction",
        ]
      },
      {
        week: "Week 18-22",
        topics: [
          // Plant Physiology 
          "Morphology of Flowering Plants",
          "Anatomy of Flowering Plants",
          "Respiration in Plants",
          "Photosynthesis in higher plants",
          "Plant Growth and Development",
          // "Transport in Plants",

          "Hydrocarbons",
          "Haloalkanes and Haloarenes",

        ]
      }, {
        week: "Week 23-27",
        topics: [
          "Alcohols Phenols and Ethers",
          "Aldehydes, Ketones and Carboxylic Acids ",

          //Human Physiology  
          "Chemical Coordination & integration",
          "Breathing and Exchange of Gases",
          "Body Fluids and Circulation",
          //"Environmental Chemistry",
          "Chemical Kinetics",

          "Biotechnology",

        ]
      }, {
        week: "Week 28-32",
        topics: [
          //Genetics and Evolution 
          "Principles of Inheritance and Variation",
          "Molecular Basis of Inheritence",
          "Evolution",

          "Gravitation",
          "Optics",

          //Biology in Human Welfare 
          "Human Health and Diseases",
          "Microbes in Human Welfare",

        ]
      }, {
        week: "Week 33-37",
        topics: [
          "Ecosystem ",
          "Biodiversity and its Conservation",
          "Organisms and Populations",

          "Dual Nature of Radiation and Matter",
          "Atoms and Nuclei",
          "Electronic Devices",

          "Solutions",
        ]
      }
    ]
  },


  {
    phase: "Phase 4: Revision and Mock Tests (Months 11-12)",
    weeks: [
      {
        week: "Week 38-42",
        topics: [
          "Revise all subjects systematically, focusing on weak areas and important topics.",
          "Solve PYQs to assess preparation level and improve time management skills."
        ]
      }
    ]
  },

  {
    phase: "Phase 5: Last 3 weeks month 12)",
    weeks: [
      {
        week: "Week 43",
        topics: [
          "Do whatever you think is nessesary",
        ]
      },
      {
        week: "Week 44-45",
        topics: [
          "Do lite revision again of all topics"
        ]
      }
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

function toggleDone(topic) {
  const index = topics.indexOf(topic);
  if (index === -1) {
    topics.push(topic);
  } else {
    topics.splice(index, 1);
  }
  renderTopics();
}

renderTopics();
