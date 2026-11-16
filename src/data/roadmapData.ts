// PREP 100-Day Software Engineering Revision Platform
// Authoritative Syllabus Data generated from Pasted text.txt
// 15 Modules, 100 Days, 1028 Subtopics

export type RevisionStatus = 'not-revised' | 'revised' | 'needs-practice' | 'weak' | 'mastered';

export interface SubtopicItem {
  id: string;
  title: string;
  dayNumber: number;
  subSubtopics: string[];
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  moduleId: string;
  moduleLetter: string;
  moduleName: string;
  subtopics: SubtopicItem[];
}

export interface ModulePlan {
  id: string;
  letter: string;
  name: string;
  startDay: number;
  endDay: number;
  dayCount: number;
}

export const MODULES_DATA: ModulePlan[] = [
  {
    "id": "module-a",
    "letter": "A",
    "name": "Java Fundamentals",
    "startDay": 1,
    "endDay": 9,
    "dayCount": 9
  },
  {
    "id": "module-b",
    "letter": "B",
    "name": "Object-Oriented Programming",
    "startDay": 10,
    "endDay": 14,
    "dayCount": 5
  },
  {
    "id": "module-c",
    "letter": "C",
    "name": "Java Collections Framework",
    "startDay": 15,
    "endDay": 19,
    "dayCount": 5
  },
  {
    "id": "module-d",
    "letter": "D",
    "name": "Multithreading and Concurrency",
    "startDay": 20,
    "endDay": 23,
    "dayCount": 4
  },
  {
    "id": "module-e",
    "letter": "E",
    "name": "Advanced Java",
    "startDay": 24,
    "endDay": 28,
    "dayCount": 5
  },
  {
    "id": "module-f",
    "letter": "F",
    "name": "JDBC and SQL",
    "startDay": 29,
    "endDay": 33,
    "dayCount": 5
  },
  {
    "id": "module-g",
    "letter": "G",
    "name": "Spring Boot and Backend Development",
    "startDay": 34,
    "endDay": 42,
    "dayCount": 9
  },
  {
    "id": "module-h",
    "letter": "H",
    "name": "Spring Security",
    "startDay": 43,
    "endDay": 47,
    "dayCount": 5
  },
  {
    "id": "module-i",
    "letter": "I",
    "name": "Docker and Kubernetes",
    "startDay": 48,
    "endDay": 51,
    "dayCount": 4
  },
  {
    "id": "module-j",
    "letter": "J",
    "name": "React and Full-Stack Development",
    "startDay": 52,
    "endDay": 61,
    "dayCount": 10
  },
  {
    "id": "module-k",
    "letter": "K",
    "name": "Low-Level Design",
    "startDay": 62,
    "endDay": 67,
    "dayCount": 6
  },
  {
    "id": "module-l",
    "letter": "L",
    "name": "Python and AI/ML",
    "startDay": 68,
    "endDay": 74,
    "dayCount": 7
  },
  {
    "id": "module-m",
    "letter": "M",
    "name": "LLMs, RAG and Agentic AI",
    "startDay": 75,
    "endDay": 89,
    "dayCount": 15
  },
  {
    "id": "module-n",
    "letter": "N",
    "name": "HLD and System Design",
    "startDay": 90,
    "endDay": 96,
    "dayCount": 7
  },
  {
    "id": "module-o",
    "letter": "O",
    "name": "Interview Preparation",
    "startDay": 97,
    "endDay": 100,
    "dayCount": 4
  }
];

export const DAYS_DATA: DayPlan[] = [
  {
    "dayNumber": 1,
    "title": "Java Architecture",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d1-sub-1",
        "title": "Java features and platform independence",
        "dayNumber": 1,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d1-sub-2",
        "title": "JDK, JRE and JVM",
        "dayNumber": 1,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d1-sub-3",
        "title": "Java bytecode",
        "dayNumber": 1,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d1-sub-4",
        "title": "Compilation and execution lifecycle",
        "dayNumber": 1,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d1-sub-5",
        "title": "JIT compiler",
        "dayNumber": 1,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d1-sub-6",
        "title": "Java program structure",
        "dayNumber": 1,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 2,
    "title": "Variables and Data Types",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d2-sub-1",
        "title": "Variables and identifiers",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-2",
        "title": "Primitive data types",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-3",
        "title": "Reference data types",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-4",
        "title": "Local, instance and static variables",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-5",
        "title": "Constants and final",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-6",
        "title": "Type casting and conversion",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-7",
        "title": "Wrapper classes",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d2-sub-8",
        "title": "Autoboxing and unboxing",
        "dayNumber": 2,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 3,
    "title": "Operators and Conditional Statements",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d3-sub-1",
        "title": "Arithmetic operators",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-2",
        "title": "Relational operators",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-3",
        "title": "Logical operators",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-4",
        "title": "Assignment operators",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-5",
        "title": "Unary and bitwise operators",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-6",
        "title": "Ternary operator",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-7",
        "title": "if, if-else and nested if",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d3-sub-8",
        "title": "switch statement",
        "dayNumber": 3,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d3-sub-9",
        "title": "Operator precedence",
        "dayNumber": 3,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 4,
    "title": "Loops and Iteration",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d4-sub-1",
        "title": "for loop",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-2",
        "title": "while loop",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-3",
        "title": "do-while loop",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-4",
        "title": "Enhanced for loop",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-5",
        "title": "Nested loops",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-6",
        "title": "break and continue",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-7",
        "title": "Labeled break and continue",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-8",
        "title": "Infinite loops",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-9",
        "title": "Reverse iteration",
        "dayNumber": 4,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d4-sub-10",
        "title": "Pattern programming",
        "dayNumber": 4,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      }
    ]
  },
  {
    "dayNumber": 5,
    "title": "Arrays",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d5-sub-1",
        "title": "Array declaration and initialization",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-2",
        "title": "Array traversal",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-3",
        "title": "Array insertion and deletion",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-4",
        "title": "Searching and sorting",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-5",
        "title": "One-dimensional arrays",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-6",
        "title": "Two-dimensional arrays",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-7",
        "title": "Jagged arrays",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-8",
        "title": "Array copying",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-9",
        "title": "Array methods",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d5-sub-10",
        "title": "Array memory representation",
        "dayNumber": 5,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 6,
    "title": "Strings",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d6-sub-1",
        "title": "String creation",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-2",
        "title": "String immutability",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-3",
        "title": "String constant pool",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-4",
        "title": "String comparison",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-5",
        "title": "== vs equals()",
        "dayNumber": 6,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d6-sub-6",
        "title": "String methods",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-7",
        "title": "String concatenation",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-8",
        "title": "StringBuilder",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-9",
        "title": "StringBuffer",
        "dayNumber": 6,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d6-sub-10",
        "title": "String performance",
        "dayNumber": 6,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      }
    ]
  },
  {
    "dayNumber": 7,
    "title": "Methods and Recursion",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d7-sub-1",
        "title": "Method declaration and invocation",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-2",
        "title": "Parameters and return types",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-3",
        "title": "Pass-by-value",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-4",
        "title": "Method overloading",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-5",
        "title": "Method scope",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-6",
        "title": "Recursion",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-7",
        "title": "Base condition",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-8",
        "title": "Recursive call stack",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d7-sub-9",
        "title": "Direct and indirect recursion",
        "dayNumber": 7,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 8,
    "title": "Java Memory Management",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d8-sub-1",
        "title": "Stack memory",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-2",
        "title": "Heap memory",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-3",
        "title": "Object allocation",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-4",
        "title": "References",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-5",
        "title": "Garbage collection",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-6",
        "title": "Garbage collectors",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-7",
        "title": "Memory leaks",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-8",
        "title": "Static memory concepts",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d8-sub-9",
        "title": "Stack overflow",
        "dayNumber": 8,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 9,
    "title": "Complexity and Java Revision",
    "moduleId": "module-a",
    "moduleLetter": "A",
    "moduleName": "Java Fundamentals",
    "subtopics": [
      {
        "id": "d9-sub-1",
        "title": "Time complexity",
        "dayNumber": 9,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      },
      {
        "id": "d9-sub-2",
        "title": "Space complexity",
        "dayNumber": 9,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      },
      {
        "id": "d9-sub-3",
        "title": "Big O notation",
        "dayNumber": 9,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d9-sub-4",
        "title": "Omega and Theta",
        "dayNumber": 9,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d9-sub-5",
        "title": "Best, average and worst cases",
        "dayNumber": 9,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d9-sub-6",
        "title": "Complexity of loops",
        "dayNumber": 9,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      },
      {
        "id": "d9-sub-7",
        "title": "Complexity of nested loops",
        "dayNumber": 9,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      },
      {
        "id": "d9-sub-8",
        "title": "Java coding revision",
        "dayNumber": 9,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 10,
    "title": "Classes and Objects",
    "moduleId": "module-b",
    "moduleLetter": "B",
    "moduleName": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "d10-sub-1",
        "title": "Class structure",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-2",
        "title": "Object creation",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-3",
        "title": "Fields and methods",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-4",
        "title": "Constructors",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-5",
        "title": "Default constructors",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-6",
        "title": "Parameterized constructors",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-7",
        "title": "Constructor overloading",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-8",
        "title": "Constructor chaining",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d10-sub-9",
        "title": "this keyword",
        "dayNumber": 10,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 11,
    "title": "Encapsulation",
    "moduleId": "module-b",
    "moduleLetter": "B",
    "moduleName": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "d11-sub-1",
        "title": "Encapsulation fundamentals",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-2",
        "title": "Data hiding",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-3",
        "title": "Access modifiers",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-4",
        "title": "Private and public members",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-5",
        "title": "Protected and default access",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-6",
        "title": "Getters and setters",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-7",
        "title": "Validation in setters",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-8",
        "title": "Immutable classes",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d11-sub-9",
        "title": "Benefits of encapsulation",
        "dayNumber": 11,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 12,
    "title": "Inheritance",
    "moduleId": "module-b",
    "moduleLetter": "B",
    "moduleName": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "d12-sub-1",
        "title": "Inheritance fundamentals",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-2",
        "title": "extends keyword",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-3",
        "title": "Single inheritance",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-4",
        "title": "Multilevel inheritance",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-5",
        "title": "Hierarchical inheritance",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-6",
        "title": "super keyword",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-7",
        "title": "Constructor execution in inheritance",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-8",
        "title": "Method overriding",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-9",
        "title": "Method hiding",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d12-sub-10",
        "title": "IS-A relationship",
        "dayNumber": 12,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 13,
    "title": "Polymorphism and Abstraction",
    "moduleId": "module-b",
    "moduleLetter": "B",
    "moduleName": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "d13-sub-1",
        "title": "Compile-time polymorphism",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-2",
        "title": "Runtime polymorphism",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-3",
        "title": "Method overloading",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-4",
        "title": "Method overriding",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-5",
        "title": "Dynamic method dispatch",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-6",
        "title": "Upcasting and downcasting",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-7",
        "title": "Abstract classes",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-8",
        "title": "Abstract methods",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-9",
        "title": "Interfaces",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d13-sub-10",
        "title": "Default and static interface methods",
        "dayNumber": 13,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 14,
    "title": "Advanced OOP Concepts",
    "moduleId": "module-b",
    "moduleLetter": "B",
    "moduleName": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "d14-sub-1",
        "title": "Static keyword",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-2",
        "title": "Final keyword",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-3",
        "title": "Object class",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-4",
        "title": "equals() and hashCode()",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-5",
        "title": "toString()",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-6",
        "title": "Association",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-7",
        "title": "Aggregation",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-8",
        "title": "Composition",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-9",
        "title": "Coupling and cohesion",
        "dayNumber": 14,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d14-sub-10",
        "title": "SOLID principles",
        "dayNumber": 14,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      }
    ]
  },
  {
    "dayNumber": 15,
    "title": "List Framework",
    "moduleId": "module-c",
    "moduleLetter": "C",
    "moduleName": "Java Collections Framework",
    "subtopics": [
      {
        "id": "d15-sub-1",
        "title": "Collections Framework hierarchy",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-2",
        "title": "Iterable and Collection interfaces",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-3",
        "title": "List interface",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-4",
        "title": "ArrayList",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-5",
        "title": "LinkedList",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-6",
        "title": "Vector",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-7",
        "title": "Stack",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-8",
        "title": "Internal working of ArrayList",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-9",
        "title": "List operations",
        "dayNumber": 15,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d15-sub-10",
        "title": "Time complexity",
        "dayNumber": 15,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      }
    ]
  },
  {
    "dayNumber": 16,
    "title": "Set Framework",
    "moduleId": "module-c",
    "moduleLetter": "C",
    "moduleName": "Java Collections Framework",
    "subtopics": [
      {
        "id": "d16-sub-1",
        "title": "Set interface",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-2",
        "title": "HashSet",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-3",
        "title": "LinkedHashSet",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-4",
        "title": "TreeSet",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-5",
        "title": "Duplicate prevention",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-6",
        "title": "Hashing",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-7",
        "title": "Hash collisions",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-8",
        "title": "Ordering and sorting",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d16-sub-9",
        "title": "equals() and hashCode()",
        "dayNumber": 16,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 17,
    "title": "Map Framework",
    "moduleId": "module-c",
    "moduleLetter": "C",
    "moduleName": "Java Collections Framework",
    "subtopics": [
      {
        "id": "d17-sub-1",
        "title": "Map interface",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-2",
        "title": "HashMap",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-3",
        "title": "LinkedHashMap",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-4",
        "title": "TreeMap",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-5",
        "title": "Hashtable",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-6",
        "title": "Key-value storage",
        "dayNumber": 17,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d17-sub-7",
        "title": "Null key and null values",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-8",
        "title": "Map operations",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d17-sub-9",
        "title": "Iterating over maps",
        "dayNumber": 17,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 18,
    "title": "HashMap Internal Working",
    "moduleId": "module-c",
    "moduleLetter": "C",
    "moduleName": "Java Collections Framework",
    "subtopics": [
      {
        "id": "d18-sub-1",
        "title": "Hashing mechanism",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-2",
        "title": "hashCode() method",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-3",
        "title": "Hash spreading",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-4",
        "title": "Bucket index calculation",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-5",
        "title": "Collision handling",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-6",
        "title": "Separate chaining",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-7",
        "title": "Treeification",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-8",
        "title": "Load factor",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-9",
        "title": "Initial capacity",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-10",
        "title": "Resizing and rehashing",
        "dayNumber": 18,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d18-sub-11",
        "title": "HashMap complexity",
        "dayNumber": 18,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      }
    ]
  },
  {
    "dayNumber": 19,
    "title": "Queue and Collection Utilities",
    "moduleId": "module-c",
    "moduleLetter": "C",
    "moduleName": "Java Collections Framework",
    "subtopics": [
      {
        "id": "d19-sub-1",
        "title": "Queue interface",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-2",
        "title": "Deque interface",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-3",
        "title": "PriorityQueue",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-4",
        "title": "ArrayDeque",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-5",
        "title": "Iterator",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-6",
        "title": "ListIterator",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-7",
        "title": "Fail-fast behavior",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-8",
        "title": "Comparable",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-9",
        "title": "Comparator",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-10",
        "title": "Natural ordering",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d19-sub-11",
        "title": "Custom sorting",
        "dayNumber": 19,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 20,
    "title": "Thread Fundamentals",
    "moduleId": "module-d",
    "moduleLetter": "D",
    "moduleName": "Multithreading and Concurrency",
    "subtopics": [
      {
        "id": "d20-sub-1",
        "title": "Process vs thread",
        "dayNumber": 20,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d20-sub-2",
        "title": "Multithreading fundamentals",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d20-sub-3",
        "title": "Thread lifecycle",
        "dayNumber": 20,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d20-sub-4",
        "title": "Thread class",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d20-sub-5",
        "title": "Runnable interface",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d20-sub-6",
        "title": "Callable interface",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d20-sub-7",
        "title": "start() vs run()",
        "dayNumber": 20,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d20-sub-8",
        "title": "Thread priorities",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d20-sub-9",
        "title": "Thread naming",
        "dayNumber": 20,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 21,
    "title": "Synchronization",
    "moduleId": "module-d",
    "moduleLetter": "D",
    "moduleName": "Multithreading and Concurrency",
    "subtopics": [
      {
        "id": "d21-sub-1",
        "title": "Race conditions",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-2",
        "title": "Critical sections",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-3",
        "title": "Synchronization",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-4",
        "title": "Synchronized methods",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-5",
        "title": "Synchronized blocks",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-6",
        "title": "Object-level locks",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-7",
        "title": "Class-level locks",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-8",
        "title": "Volatile keyword",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d21-sub-9",
        "title": "Atomicity and visibility",
        "dayNumber": 21,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 22,
    "title": "Locks and Thread Coordination",
    "moduleId": "module-d",
    "moduleLetter": "D",
    "moduleName": "Multithreading and Concurrency",
    "subtopics": [
      {
        "id": "d22-sub-1",
        "title": "Intrinsic locks",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-2",
        "title": "ReentrantLock",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-3",
        "title": "ReadWriteLock",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-4",
        "title": "wait()",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-5",
        "title": "notify()",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-6",
        "title": "notifyAll()",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-7",
        "title": "Deadlock",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-8",
        "title": "Starvation",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-9",
        "title": "Livelock",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d22-sub-10",
        "title": "Thread coordination",
        "dayNumber": 22,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 23,
    "title": "Concurrent Programming",
    "moduleId": "module-d",
    "moduleLetter": "D",
    "moduleName": "Multithreading and Concurrency",
    "subtopics": [
      {
        "id": "d23-sub-1",
        "title": "ExecutorService",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-2",
        "title": "Thread pools",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-3",
        "title": "ScheduledExecutorService",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-4",
        "title": "Future",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-5",
        "title": "CompletableFuture",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-6",
        "title": "ConcurrentHashMap",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-7",
        "title": "Concurrent collections",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-8",
        "title": "Atomic variables",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-9",
        "title": "Fork/Join framework",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d23-sub-10",
        "title": "Parallel streams",
        "dayNumber": 23,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 24,
    "title": "Exception Handling",
    "moduleId": "module-e",
    "moduleLetter": "E",
    "moduleName": "Advanced Java",
    "subtopics": [
      {
        "id": "d24-sub-1",
        "title": "Exception hierarchy",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-2",
        "title": "Throwable class",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-3",
        "title": "Error vs Exception",
        "dayNumber": 24,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d24-sub-4",
        "title": "Checked exceptions",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-5",
        "title": "Unchecked exceptions",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-6",
        "title": "try-catch-finally",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-7",
        "title": "throw and throws",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-8",
        "title": "Multiple catch blocks",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-9",
        "title": "Custom exceptions",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d24-sub-10",
        "title": "Try-with-resources",
        "dayNumber": 24,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 25,
    "title": "Generics and Reflection",
    "moduleId": "module-e",
    "moduleLetter": "E",
    "moduleName": "Advanced Java",
    "subtopics": [
      {
        "id": "d25-sub-1",
        "title": "Generic classes",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-2",
        "title": "Generic methods",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-3",
        "title": "Type parameters",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-4",
        "title": "Bounded types",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-5",
        "title": "Wildcards",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-6",
        "title": "Upper and lower bounds",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-7",
        "title": "Type erasure",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-8",
        "title": "Annotations",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-9",
        "title": "Reflection API",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d25-sub-10",
        "title": "Runtime metadata",
        "dayNumber": 25,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 26,
    "title": "Functional Programming",
    "moduleId": "module-e",
    "moduleLetter": "E",
    "moduleName": "Advanced Java",
    "subtopics": [
      {
        "id": "d26-sub-1",
        "title": "Functional programming concepts",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-2",
        "title": "Lambda expressions",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-3",
        "title": "Functional interfaces",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-4",
        "title": "Predicate",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-5",
        "title": "Function",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-6",
        "title": "Consumer",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-7",
        "title": "Supplier",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-8",
        "title": "BiFunction",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-9",
        "title": "Method references",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d26-sub-10",
        "title": "Constructor references",
        "dayNumber": 26,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 27,
    "title": "Stream API",
    "moduleId": "module-e",
    "moduleLetter": "E",
    "moduleName": "Advanced Java",
    "subtopics": [
      {
        "id": "d27-sub-1",
        "title": "Stream fundamentals",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-2",
        "title": "Stream creation",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-3",
        "title": "Intermediate operations",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-4",
        "title": "Terminal operations",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-5",
        "title": "filter()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-6",
        "title": "map()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-7",
        "title": "flatMap()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-8",
        "title": "sorted()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-9",
        "title": "distinct()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-10",
        "title": "reduce()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-11",
        "title": "collect()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-12",
        "title": "groupingBy()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-13",
        "title": "partitioningBy()",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d27-sub-14",
        "title": "Optional",
        "dayNumber": 27,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 28,
    "title": "JVM and Advanced Runtime",
    "moduleId": "module-e",
    "moduleLetter": "E",
    "moduleName": "Advanced Java",
    "subtopics": [
      {
        "id": "d28-sub-1",
        "title": "JVM architecture",
        "dayNumber": 28,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d28-sub-2",
        "title": "Class loading",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-3",
        "title": "Class loaders",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-4",
        "title": "Bytecode execution",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-5",
        "title": "Garbage collection",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-6",
        "title": "Garbage collector types",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-7",
        "title": "Serialization",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-8",
        "title": "Deserialization",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-9",
        "title": "Memory leaks",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d28-sub-10",
        "title": "JVM monitoring and profiling",
        "dayNumber": 28,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 29,
    "title": "JDBC Architecture",
    "moduleId": "module-f",
    "moduleLetter": "F",
    "moduleName": "JDBC and SQL",
    "subtopics": [
      {
        "id": "d29-sub-1",
        "title": "JDBC fundamentals",
        "dayNumber": 29,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d29-sub-2",
        "title": "JDBC architecture",
        "dayNumber": 29,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d29-sub-3",
        "title": "JDBC driver types",
        "dayNumber": 29,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d29-sub-4",
        "title": "DriverManager",
        "dayNumber": 29,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d29-sub-5",
        "title": "Connection",
        "dayNumber": 29,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d29-sub-6",
        "title": "Statement",
        "dayNumber": 29,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d29-sub-7",
        "title": "PreparedStatement",
        "dayNumber": 29,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d29-sub-8",
        "title": "CallableStatement",
        "dayNumber": 29,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d29-sub-9",
        "title": "Connection lifecycle",
        "dayNumber": 29,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 30,
    "title": "JDBC Operations",
    "moduleId": "module-f",
    "moduleLetter": "F",
    "moduleName": "JDBC and SQL",
    "subtopics": [
      {
        "id": "d30-sub-1",
        "title": "ResultSet",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-2",
        "title": "CRUD operations",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-3",
        "title": "Insert, update and delete",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-4",
        "title": "Batch processing",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-5",
        "title": "Transaction management",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-6",
        "title": "Commit and rollback",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-7",
        "title": "Auto-commit",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-8",
        "title": "Connection pooling",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d30-sub-9",
        "title": "SQL exception handling",
        "dayNumber": 30,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 31,
    "title": "SQL Fundamentals",
    "moduleId": "module-f",
    "moduleLetter": "F",
    "moduleName": "JDBC and SQL",
    "subtopics": [
      {
        "id": "d31-sub-1",
        "title": "Database fundamentals",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-2",
        "title": "Tables, rows and columns",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-3",
        "title": "DDL commands",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-4",
        "title": "DML commands",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-5",
        "title": "DQL commands",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-6",
        "title": "DCL and TCL",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-7",
        "title": "SELECT statement",
        "dayNumber": 31,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d31-sub-8",
        "title": "WHERE clause",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-9",
        "title": "ORDER BY",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-10",
        "title": "GROUP BY",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-11",
        "title": "HAVING",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-12",
        "title": "Aggregate functions",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d31-sub-13",
        "title": "Constraints",
        "dayNumber": 31,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 32,
    "title": "SQL Querying",
    "moduleId": "module-f",
    "moduleLetter": "F",
    "moduleName": "JDBC and SQL",
    "subtopics": [
      {
        "id": "d32-sub-1",
        "title": "INNER JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-2",
        "title": "LEFT JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-3",
        "title": "RIGHT JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-4",
        "title": "FULL OUTER JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-5",
        "title": "SELF JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-6",
        "title": "CROSS JOIN",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-7",
        "title": "Subqueries",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-8",
        "title": "Correlated subqueries",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-9",
        "title": "Common Table Expressions",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-10",
        "title": "UNION and UNION ALL",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-11",
        "title": "INTERSECT and EXCEPT",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d32-sub-12",
        "title": "EXISTS and NOT EXISTS",
        "dayNumber": 32,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 33,
    "title": "Database Internals",
    "moduleId": "module-f",
    "moduleLetter": "F",
    "moduleName": "JDBC and SQL",
    "subtopics": [
      {
        "id": "d33-sub-1",
        "title": "Primary and foreign keys",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-2",
        "title": "Candidate and composite keys",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-3",
        "title": "Indexes",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-4",
        "title": "Clustered and non-clustered indexes",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-5",
        "title": "Database normalization",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-6",
        "title": "1NF, 2NF and 3NF",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-7",
        "title": "BCNF fundamentals",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-8",
        "title": "ACID properties",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-9",
        "title": "Transaction isolation levels",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-10",
        "title": "Window functions",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-11",
        "title": "Query optimization",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d33-sub-12",
        "title": "Execution plans",
        "dayNumber": 33,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 34,
    "title": "Spring Core",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d34-sub-1",
        "title": "Spring Framework architecture",
        "dayNumber": 34,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d34-sub-2",
        "title": "Inversion of Control",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-3",
        "title": "Dependency Injection",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-4",
        "title": "Constructor injection",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-5",
        "title": "Setter injection",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-6",
        "title": "Field injection",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-7",
        "title": "BeanFactory",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-8",
        "title": "ApplicationContext",
        "dayNumber": 34,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d34-sub-9",
        "title": "Spring Beans",
        "dayNumber": 34,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      }
    ]
  },
  {
    "dayNumber": 35,
    "title": "Spring Bean Management",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d35-sub-1",
        "title": "Bean lifecycle",
        "dayNumber": 35,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d35-sub-2",
        "title": "Bean scopes",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-3",
        "title": "Singleton and prototype scopes",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-4",
        "title": "@Component",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-5",
        "title": "@Service",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-6",
        "title": "@Repository",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-7",
        "title": "@Autowired",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-8",
        "title": "@Qualifier",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-9",
        "title": "@Primary",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-10",
        "title": "Component scanning",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-11",
        "title": "Java-based configuration",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d35-sub-12",
        "title": "@Bean and @Configuration",
        "dayNumber": 35,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 36,
    "title": "Spring Boot Architecture",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d36-sub-1",
        "title": "Spring Boot fundamentals",
        "dayNumber": 36,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d36-sub-2",
        "title": "Spring Boot architecture",
        "dayNumber": 36,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d36-sub-3",
        "title": "Starter dependencies",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-4",
        "title": "Auto-configuration",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-5",
        "title": "Embedded servers",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-6",
        "title": "application.properties",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-7",
        "title": "application.yml",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-8",
        "title": "Profiles",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-9",
        "title": "Environment variables",
        "dayNumber": 36,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d36-sub-10",
        "title": "Application lifecycle",
        "dayNumber": 36,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 37,
    "title": "REST API Development",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d37-sub-1",
        "title": "REST architecture",
        "dayNumber": 37,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d37-sub-2",
        "title": "REST principles",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-3",
        "title": "HTTP protocol",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-4",
        "title": "HTTP methods",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-5",
        "title": "GET, POST, PUT, PATCH, DELETE",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-6",
        "title": "HTTP status codes",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-7",
        "title": "@RestController",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-8",
        "title": "@RequestMapping",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-9",
        "title": "@GetMapping and @PostMapping",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-10",
        "title": "@PathVariable",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-11",
        "title": "@RequestParam",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-12",
        "title": "@RequestBody",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d37-sub-13",
        "title": "ResponseEntity",
        "dayNumber": 37,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 38,
    "title": "Backend Architecture",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d38-sub-1",
        "title": "Layered architecture",
        "dayNumber": 38,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d38-sub-2",
        "title": "Controller layer",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-3",
        "title": "Service layer",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-4",
        "title": "Repository layer",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-5",
        "title": "Entity classes",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-6",
        "title": "DTO classes",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-7",
        "title": "Request and response objects",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-8",
        "title": "Dependency management",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-9",
        "title": "Separation of concerns",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d38-sub-10",
        "title": "Model mapping",
        "dayNumber": 38,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 39,
    "title": "Spring Data JPA and Hibernate",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d39-sub-1",
        "title": "ORM fundamentals",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-2",
        "title": "JPA architecture",
        "dayNumber": 39,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d39-sub-3",
        "title": "Hibernate architecture",
        "dayNumber": 39,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d39-sub-4",
        "title": "Entity lifecycle",
        "dayNumber": 39,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d39-sub-5",
        "title": "@Entity and @Id",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-6",
        "title": "Entity relationships",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-7",
        "title": "One-to-One",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-8",
        "title": "One-to-Many",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-9",
        "title": "Many-to-One",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-10",
        "title": "Many-to-Many",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-11",
        "title": "Lazy and eager loading",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-12",
        "title": "Cascading",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d39-sub-13",
        "title": "EntityManager",
        "dayNumber": 39,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 40,
    "title": "Database Operations",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d40-sub-1",
        "title": "JpaRepository",
        "dayNumber": 40,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d40-sub-2",
        "title": "CRUD operations",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-3",
        "title": "Derived query methods",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-4",
        "title": "JPQL",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-5",
        "title": "Native SQL queries",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-6",
        "title": "Pagination",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-7",
        "title": "Sorting",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-8",
        "title": "@Transactional",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-9",
        "title": "Transaction propagation",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-10",
        "title": "Transaction isolation",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d40-sub-11",
        "title": "N+1 query problem",
        "dayNumber": 40,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 41,
    "title": "API Quality and Documentation",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d41-sub-1",
        "title": "Bean Validation",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-2",
        "title": "@Valid",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-3",
        "title": "@NotNull and @NotBlank",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-4",
        "title": "Custom validation",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-5",
        "title": "Global exception handling",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-6",
        "title": "@ControllerAdvice",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-7",
        "title": "@ExceptionHandler",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-8",
        "title": "Logging",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-9",
        "title": "SLF4J and Logback",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-10",
        "title": "Swagger",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d41-sub-11",
        "title": "OpenAPI documentation",
        "dayNumber": 41,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 42,
    "title": "Testing and Backend Revision",
    "moduleId": "module-g",
    "moduleLetter": "G",
    "moduleName": "Spring Boot and Backend Development",
    "subtopics": [
      {
        "id": "d42-sub-1",
        "title": "Unit testing",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-2",
        "title": "Integration testing",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-3",
        "title": "JUnit",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-4",
        "title": "Mockito",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-5",
        "title": "Mocking and stubbing",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-6",
        "title": "Assertions",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-7",
        "title": "@SpringBootTest",
        "dayNumber": 42,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d42-sub-8",
        "title": "MockMvc",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-9",
        "title": "API testing",
        "dayNumber": 42,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d42-sub-10",
        "title": "Test coverage",
        "dayNumber": 42,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      }
    ]
  },
  {
    "dayNumber": 43,
    "title": "Security Fundamentals",
    "moduleId": "module-h",
    "moduleLetter": "H",
    "moduleName": "Spring Security",
    "subtopics": [
      {
        "id": "d43-sub-1",
        "title": "Authentication vs authorization",
        "dayNumber": 43,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d43-sub-2",
        "title": "Spring Security architecture",
        "dayNumber": 43,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d43-sub-3",
        "title": "SecurityFilterChain",
        "dayNumber": 43,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d43-sub-4",
        "title": "Security filters",
        "dayNumber": 43,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d43-sub-5",
        "title": "SecurityContext",
        "dayNumber": 43,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d43-sub-6",
        "title": "Authentication object",
        "dayNumber": 43,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d43-sub-7",
        "title": "Authorization rules",
        "dayNumber": 43,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d43-sub-8",
        "title": "Request matchers",
        "dayNumber": 43,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 44,
    "title": "User Authentication",
    "moduleId": "module-h",
    "moduleLetter": "H",
    "moduleName": "Spring Security",
    "subtopics": [
      {
        "id": "d44-sub-1",
        "title": "UserDetails",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-2",
        "title": "UserDetailsService",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-3",
        "title": "AuthenticationManager",
        "dayNumber": 44,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d44-sub-4",
        "title": "AuthenticationProvider",
        "dayNumber": 44,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d44-sub-5",
        "title": "PasswordEncoder",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-6",
        "title": "BCrypt",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-7",
        "title": "User registration",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-8",
        "title": "Login workflow",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d44-sub-9",
        "title": "Password verification",
        "dayNumber": 44,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 45,
    "title": "JWT Authentication",
    "moduleId": "module-h",
    "moduleLetter": "H",
    "moduleName": "Spring Security",
    "subtopics": [
      {
        "id": "d45-sub-1",
        "title": "JWT fundamentals",
        "dayNumber": 45,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d45-sub-2",
        "title": "JWT structure",
        "dayNumber": 45,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d45-sub-3",
        "title": "Header, payload and signature",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-4",
        "title": "Token generation",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-5",
        "title": "Token validation",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-6",
        "title": "Access tokens",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-7",
        "title": "Refresh tokens",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-8",
        "title": "Token expiration",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-9",
        "title": "Token revocation",
        "dayNumber": 45,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d45-sub-10",
        "title": "Stateless authentication",
        "dayNumber": 45,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      }
    ]
  },
  {
    "dayNumber": 46,
    "title": "Authorization and RBAC",
    "moduleId": "module-h",
    "moduleLetter": "H",
    "moduleName": "Spring Security",
    "subtopics": [
      {
        "id": "d46-sub-1",
        "title": "Role-based access control",
        "dayNumber": 46,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d46-sub-2",
        "title": "Roles and authorities",
        "dayNumber": 46,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d46-sub-3",
        "title": "Permissions",
        "dayNumber": 46,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d46-sub-4",
        "title": "hasRole()",
        "dayNumber": 46,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d46-sub-5",
        "title": "hasAuthority()",
        "dayNumber": 46,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d46-sub-6",
        "title": "@PreAuthorize",
        "dayNumber": 46,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d46-sub-7",
        "title": "@PostAuthorize",
        "dayNumber": 46,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d46-sub-8",
        "title": "Method-level security",
        "dayNumber": 46,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d46-sub-9",
        "title": "Protected endpoints",
        "dayNumber": 46,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 47,
    "title": "Web Security",
    "moduleId": "module-h",
    "moduleLetter": "H",
    "moduleName": "Spring Security",
    "subtopics": [
      {
        "id": "d47-sub-1",
        "title": "CORS",
        "dayNumber": 47,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d47-sub-2",
        "title": "CSRF",
        "dayNumber": 47,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d47-sub-3",
        "title": "Session management",
        "dayNumber": 47,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d47-sub-4",
        "title": "Stateless sessions",
        "dayNumber": 47,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d47-sub-5",
        "title": "OAuth2 fundamentals",
        "dayNumber": 47,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d47-sub-6",
        "title": "OAuth2 login",
        "dayNumber": 47,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d47-sub-7",
        "title": "Secure password storage",
        "dayNumber": 47,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d47-sub-8",
        "title": "OWASP Top 10",
        "dayNumber": 47,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d47-sub-9",
        "title": "Security best practices",
        "dayNumber": 47,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      }
    ]
  },
  {
    "dayNumber": 48,
    "title": "Docker Fundamentals",
    "moduleId": "module-i",
    "moduleLetter": "I",
    "moduleName": "Docker and Kubernetes",
    "subtopics": [
      {
        "id": "d48-sub-1",
        "title": "Virtual machines vs containers",
        "dayNumber": 48,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d48-sub-2",
        "title": "Docker architecture",
        "dayNumber": 48,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d48-sub-3",
        "title": "Docker Engine",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-4",
        "title": "Docker images",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-5",
        "title": "Docker containers",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-6",
        "title": "Dockerfile",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-7",
        "title": "Image layers",
        "dayNumber": 48,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d48-sub-8",
        "title": "Docker build",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-9",
        "title": "Docker run",
        "dayNumber": 48,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d48-sub-10",
        "title": "Container lifecycle",
        "dayNumber": 48,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 49,
    "title": "Advanced Docker",
    "moduleId": "module-i",
    "moduleLetter": "I",
    "moduleName": "Docker and Kubernetes",
    "subtopics": [
      {
        "id": "d49-sub-1",
        "title": "Docker volumes",
        "dayNumber": 49,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d49-sub-2",
        "title": "Bind mounts",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-3",
        "title": "Docker networking",
        "dayNumber": 49,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d49-sub-4",
        "title": "Bridge network",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-5",
        "title": "Host network",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-6",
        "title": "Docker Compose",
        "dayNumber": 49,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d49-sub-7",
        "title": "Environment variables",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-8",
        "title": "Multi-stage builds",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-9",
        "title": "Container logs",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d49-sub-10",
        "title": "Image optimization",
        "dayNumber": 49,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 50,
    "title": "Kubernetes Fundamentals",
    "moduleId": "module-i",
    "moduleLetter": "I",
    "moduleName": "Docker and Kubernetes",
    "subtopics": [
      {
        "id": "d50-sub-1",
        "title": "Kubernetes architecture",
        "dayNumber": 50,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d50-sub-2",
        "title": "Control plane",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-3",
        "title": "Worker nodes",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-4",
        "title": "API server",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-5",
        "title": "Scheduler",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-6",
        "title": "Controller manager",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-7",
        "title": "Pods",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-8",
        "title": "ReplicaSets",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-9",
        "title": "Deployments",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d50-sub-10",
        "title": "Namespaces",
        "dayNumber": 50,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 51,
    "title": "Kubernetes Operations",
    "moduleId": "module-i",
    "moduleLetter": "I",
    "moduleName": "Docker and Kubernetes",
    "subtopics": [
      {
        "id": "d51-sub-1",
        "title": "Kubernetes Services",
        "dayNumber": 51,
        "subSubtopics": [
          "Declarative manifest syntax & specs",
          "Networking, storage, and runtime state",
          "Production orchestration best practices"
        ]
      },
      {
        "id": "d51-sub-2",
        "title": "ClusterIP",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-3",
        "title": "NodePort",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-4",
        "title": "LoadBalancer",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-5",
        "title": "Ingress",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-6",
        "title": "ConfigMaps",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-7",
        "title": "Secrets",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-8",
        "title": "Persistent volumes",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-9",
        "title": "Liveness probes",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-10",
        "title": "Readiness probes",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-11",
        "title": "Horizontal scaling",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-12",
        "title": "Rolling updates",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d51-sub-13",
        "title": "Rollbacks",
        "dayNumber": 51,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 52,
    "title": "JavaScript ES6+",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d52-sub-1",
        "title": "var, let and const",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-2",
        "title": "Data types",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-3",
        "title": "Arrow functions",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-4",
        "title": "Template literals",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-5",
        "title": "Destructuring",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-6",
        "title": "Spread and rest operators",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-7",
        "title": "Array methods",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-8",
        "title": "map(), filter(), reduce()",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-9",
        "title": "Promises",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-10",
        "title": "async/await",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-11",
        "title": "Modules",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d52-sub-12",
        "title": "Closures",
        "dayNumber": 52,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 53,
    "title": "React Fundamentals",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d53-sub-1",
        "title": "React architecture",
        "dayNumber": 53,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d53-sub-2",
        "title": "Virtual DOM",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-3",
        "title": "JSX",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-4",
        "title": "Functional components",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-5",
        "title": "Props",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-6",
        "title": "Component composition",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-7",
        "title": "Rendering",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-8",
        "title": "Component reusability",
        "dayNumber": 53,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d53-sub-9",
        "title": "Fragment",
        "dayNumber": 53,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      }
    ]
  },
  {
    "dayNumber": 54,
    "title": "State and Events",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d54-sub-1",
        "title": "useState",
        "dayNumber": 54,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d54-sub-2",
        "title": "State management",
        "dayNumber": 54,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d54-sub-3",
        "title": "Event handling",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d54-sub-4",
        "title": "Conditional rendering",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d54-sub-5",
        "title": "Lists and keys",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d54-sub-6",
        "title": "Controlled components",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d54-sub-7",
        "title": "Uncontrolled components",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d54-sub-8",
        "title": "State updates",
        "dayNumber": 54,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d54-sub-9",
        "title": "Props drilling",
        "dayNumber": 54,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 55,
    "title": "React Hooks I",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d55-sub-1",
        "title": "useEffect",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-2",
        "title": "Effect lifecycle",
        "dayNumber": 55,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d55-sub-3",
        "title": "Dependency arrays",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-4",
        "title": "Cleanup functions",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-5",
        "title": "Side effects",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-6",
        "title": "useRef",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-7",
        "title": "DOM references",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-8",
        "title": "Previous values",
        "dayNumber": 55,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d55-sub-9",
        "title": "Component lifecycle concepts",
        "dayNumber": 55,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 56,
    "title": "React Hooks II",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d56-sub-1",
        "title": "useMemo",
        "dayNumber": 56,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d56-sub-2",
        "title": "useCallback",
        "dayNumber": 56,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d56-sub-3",
        "title": "useContext",
        "dayNumber": 56,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d56-sub-4",
        "title": "Custom hooks",
        "dayNumber": 56,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d56-sub-5",
        "title": "Context API",
        "dayNumber": 56,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d56-sub-6",
        "title": "State sharing",
        "dayNumber": 56,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d56-sub-7",
        "title": "Memoization",
        "dayNumber": 56,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d56-sub-8",
        "title": "Performance optimization",
        "dayNumber": 56,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      },
      {
        "id": "d56-sub-9",
        "title": "React.memo",
        "dayNumber": 56,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      }
    ]
  },
  {
    "dayNumber": 57,
    "title": "Routing and Forms",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d57-sub-1",
        "title": "React Router",
        "dayNumber": 57,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d57-sub-2",
        "title": "BrowserRouter",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-3",
        "title": "Routes and Route",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-4",
        "title": "Link and NavLink",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-5",
        "title": "Nested routes",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-6",
        "title": "Dynamic routes",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-7",
        "title": "Protected routes",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-8",
        "title": "Form handling",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d57-sub-9",
        "title": "Form validation",
        "dayNumber": 57,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 58,
    "title": "API Integration",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d58-sub-1",
        "title": "Fetch API",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-2",
        "title": "Axios",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-3",
        "title": "HTTP requests",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-4",
        "title": "GET, POST, PUT, DELETE",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-5",
        "title": "API integration",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-6",
        "title": "Loading states",
        "dayNumber": 58,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d58-sub-7",
        "title": "Error handling",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-8",
        "title": "Axios interceptors",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-9",
        "title": "JSON handling",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d58-sub-10",
        "title": "Environment variables",
        "dayNumber": 58,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 59,
    "title": "Frontend-Backend Integration",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d59-sub-1",
        "title": "React + Spring Boot",
        "dayNumber": 59,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d59-sub-2",
        "title": "REST API integration",
        "dayNumber": 59,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d59-sub-3",
        "title": "CORS configuration",
        "dayNumber": 59,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d59-sub-4",
        "title": "JWT authentication flow",
        "dayNumber": 59,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d59-sub-5",
        "title": "Token management",
        "dayNumber": 59,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d59-sub-6",
        "title": "Protected routes",
        "dayNumber": 59,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d59-sub-7",
        "title": "Login and registration",
        "dayNumber": 59,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d59-sub-8",
        "title": "Request and response lifecycle",
        "dayNumber": 59,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 60,
    "title": "Full-Stack Architecture",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d60-sub-1",
        "title": "Frontend architecture",
        "dayNumber": 60,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d60-sub-2",
        "title": "Backend architecture",
        "dayNumber": 60,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d60-sub-3",
        "title": "Database integration",
        "dayNumber": 60,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d60-sub-4",
        "title": "CRUD workflow",
        "dayNumber": 60,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d60-sub-5",
        "title": "Authentication workflow",
        "dayNumber": 60,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d60-sub-6",
        "title": "Authorization workflow",
        "dayNumber": 60,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      },
      {
        "id": "d60-sub-7",
        "title": "API design",
        "dayNumber": 60,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d60-sub-8",
        "title": "Application structure",
        "dayNumber": 60,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d60-sub-9",
        "title": "Error handling",
        "dayNumber": 60,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d60-sub-10",
        "title": "State management",
        "dayNumber": 60,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      }
    ]
  },
  {
    "dayNumber": 61,
    "title": "Deployment and Debugging",
    "moduleId": "module-j",
    "moduleLetter": "J",
    "moduleName": "React and Full-Stack Development",
    "subtopics": [
      {
        "id": "d61-sub-1",
        "title": "Production builds",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-2",
        "title": "Environment configuration",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-3",
        "title": "Frontend deployment",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-4",
        "title": "Backend deployment",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-5",
        "title": "Database deployment",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-6",
        "title": "Debugging",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-7",
        "title": "Browser DevTools",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-8",
        "title": "Network inspection",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-9",
        "title": "Logging",
        "dayNumber": 61,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d61-sub-10",
        "title": "Performance optimization",
        "dayNumber": 61,
        "subSubtopics": [
          "Time complexity analysis (Best / Average / Worst)",
          "Space complexity and memory footprint",
          "Optimization techniques and trade-offs"
        ]
      }
    ]
  },
  {
    "dayNumber": 62,
    "title": "Design Principles",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d62-sub-1",
        "title": "SOLID principles",
        "dayNumber": 62,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d62-sub-2",
        "title": "Single Responsibility",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-3",
        "title": "Open/Closed",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-4",
        "title": "Liskov Substitution",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-5",
        "title": "Interface Segregation",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-6",
        "title": "Dependency Inversion",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-7",
        "title": "DRY",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-8",
        "title": "KISS",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-9",
        "title": "YAGNI",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d62-sub-10",
        "title": "Coupling and cohesion",
        "dayNumber": 62,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 63,
    "title": "UML and Object Modelling",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d63-sub-1",
        "title": "UML fundamentals",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-2",
        "title": "Class diagrams",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-3",
        "title": "Sequence diagrams",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-4",
        "title": "Use case diagrams",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-5",
        "title": "Association",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-6",
        "title": "Aggregation",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-7",
        "title": "Composition",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-8",
        "title": "Inheritance relationships",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-9",
        "title": "Interfaces",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d63-sub-10",
        "title": "Object relationships",
        "dayNumber": 63,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 64,
    "title": "Creational Design Patterns",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d64-sub-1",
        "title": "Singleton",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-2",
        "title": "Factory Method",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-3",
        "title": "Abstract Factory",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-4",
        "title": "Builder",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-5",
        "title": "Prototype",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-6",
        "title": "Object creation principles",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d64-sub-7",
        "title": "Pattern implementation",
        "dayNumber": 64,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d64-sub-8",
        "title": "Real-world use cases",
        "dayNumber": 64,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 65,
    "title": "Structural Design Patterns",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d65-sub-1",
        "title": "Adapter",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-2",
        "title": "Decorator",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-3",
        "title": "Facade",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-4",
        "title": "Proxy",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-5",
        "title": "Composite",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-6",
        "title": "Bridge",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-7",
        "title": "Structural relationships",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d65-sub-8",
        "title": "Real-world implementations",
        "dayNumber": 65,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 66,
    "title": "Behavioral Design Patterns",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d66-sub-1",
        "title": "Strategy",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-2",
        "title": "Observer",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-3",
        "title": "State",
        "dayNumber": 66,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d66-sub-4",
        "title": "Command",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-5",
        "title": "Template Method",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-6",
        "title": "Chain of Responsibility",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-7",
        "title": "Iterator",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-8",
        "title": "Mediator",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d66-sub-9",
        "title": "Behavioral use cases",
        "dayNumber": 66,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 67,
    "title": "LLD Case Studies",
    "moduleId": "module-k",
    "moduleLetter": "K",
    "moduleName": "Low-Level Design",
    "subtopics": [
      {
        "id": "d67-sub-1",
        "title": "Parking Lot",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-2",
        "title": "Elevator System",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-3",
        "title": "Library Management",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-4",
        "title": "Splitwise",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-5",
        "title": "Class identification",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-6",
        "title": "Interface design",
        "dayNumber": 67,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d67-sub-7",
        "title": "Object relationships",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-8",
        "title": "Extensibility",
        "dayNumber": 67,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d67-sub-9",
        "title": "Design trade-offs",
        "dayNumber": 67,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      }
    ]
  },
  {
    "dayNumber": 68,
    "title": "Python Fundamentals",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d68-sub-1",
        "title": "Python syntax",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-2",
        "title": "Variables and data types",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-3",
        "title": "Strings",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-4",
        "title": "Lists",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-5",
        "title": "Tuples",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-6",
        "title": "Sets",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-7",
        "title": "Dictionaries",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-8",
        "title": "Slicing",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-9",
        "title": "List comprehensions",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d68-sub-10",
        "title": "Type conversion",
        "dayNumber": 68,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 69,
    "title": "Python Programming",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d69-sub-1",
        "title": "Functions",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-2",
        "title": "Lambda expressions",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-3",
        "title": "Decorators",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-4",
        "title": "Iterators",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-5",
        "title": "Generators",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-6",
        "title": "OOP",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-7",
        "title": "Inheritance",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-8",
        "title": "Exception handling",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-9",
        "title": "File handling",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-10",
        "title": "Modules and packages",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-11",
        "title": "Virtual environments",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d69-sub-12",
        "title": "pip",
        "dayNumber": 69,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 70,
    "title": "AI and ML Foundations",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d70-sub-1",
        "title": "Artificial Intelligence",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-2",
        "title": "Machine Learning",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-3",
        "title": "Deep Learning",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-4",
        "title": "Generative AI",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-5",
        "title": "AI vs ML vs DL",
        "dayNumber": 70,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d70-sub-6",
        "title": "ML workflow",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-7",
        "title": "Datasets",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-8",
        "title": "Features and labels",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-9",
        "title": "Training data",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-10",
        "title": "Validation data",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-11",
        "title": "Testing data",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-12",
        "title": "Supervised learning",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-13",
        "title": "Unsupervised learning",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d70-sub-14",
        "title": "Reinforcement learning fundamentals",
        "dayNumber": 70,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 71,
    "title": "Regression Algorithms",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d71-sub-1",
        "title": "Regression fundamentals",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-2",
        "title": "Linear regression",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-3",
        "title": "Simple linear regression",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-4",
        "title": "Multiple linear regression",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-5",
        "title": "Polynomial regression",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-6",
        "title": "Logistic regression",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-7",
        "title": "Cost functions",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-8",
        "title": "Loss functions",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-9",
        "title": "Gradient descent",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d71-sub-10",
        "title": "Model assumptions",
        "dayNumber": 71,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 72,
    "title": "Classification Algorithms",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d72-sub-1",
        "title": "Classification fundamentals",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-2",
        "title": "Binary classification",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-3",
        "title": "Multiclass classification",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-4",
        "title": "Decision trees",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-5",
        "title": "Random forests",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-6",
        "title": "K-Nearest Neighbors",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-7",
        "title": "Support Vector Machines",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-8",
        "title": "Naive Bayes",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-9",
        "title": "Classification boundaries",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d72-sub-10",
        "title": "Confusion matrix",
        "dayNumber": 72,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 73,
    "title": "Unsupervised Learning",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d73-sub-1",
        "title": "Clustering fundamentals",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-2",
        "title": "K-means clustering",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-3",
        "title": "Hierarchical clustering",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-4",
        "title": "DBSCAN fundamentals",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-5",
        "title": "Centroids",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-6",
        "title": "Distance metrics",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-7",
        "title": "Dimensionality reduction",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-8",
        "title": "Principal Component Analysis",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d73-sub-9",
        "title": "Feature extraction",
        "dayNumber": 73,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 74,
    "title": "ML Evaluation and Neural Networks",
    "moduleId": "module-l",
    "moduleLetter": "L",
    "moduleName": "Python and AI/ML",
    "subtopics": [
      {
        "id": "d74-sub-1",
        "title": "Feature engineering",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-2",
        "title": "Feature selection",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-3",
        "title": "Data normalization",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-4",
        "title": "Standardization",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-5",
        "title": "Overfitting",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-6",
        "title": "Underfitting",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-7",
        "title": "Bias-variance trade-off",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-8",
        "title": "Regularization",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-9",
        "title": "Cross-validation",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-10",
        "title": "Accuracy",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-11",
        "title": "Precision and recall",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-12",
        "title": "F1-score",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-13",
        "title": "MAE, MSE and RMSE",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-14",
        "title": "Neural networks",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-15",
        "title": "Neurons and layers",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-16",
        "title": "Activation functions",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-17",
        "title": "Forward propagation",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-18",
        "title": "Backpropagation",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d74-sub-19",
        "title": "Loss optimization",
        "dayNumber": 74,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 75,
    "title": "Generative AI and LLM Fundamentals",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d75-sub-1",
        "title": "Artificial Intelligence vs Generative AI",
        "dayNumber": 75,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d75-sub-2",
        "title": "Large Language Models",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-3",
        "title": "LLM architecture overview",
        "dayNumber": 75,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d75-sub-4",
        "title": "Model parameters",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-5",
        "title": "Tokens",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-6",
        "title": "Tokenization",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-7",
        "title": "Vocabulary",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-8",
        "title": "Pre-training",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-9",
        "title": "Post-training",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-10",
        "title": "Instruction tuning",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-11",
        "title": "Foundation models",
        "dayNumber": 75,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d75-sub-12",
        "title": "Open-source vs closed-source models",
        "dayNumber": 75,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      }
    ]
  },
  {
    "dayNumber": 76,
    "title": "Transformer Architecture",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d76-sub-1",
        "title": "Neural network foundations",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-2",
        "title": "Sequence modelling",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-3",
        "title": "Encoder architecture",
        "dayNumber": 76,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d76-sub-4",
        "title": "Decoder architecture",
        "dayNumber": 76,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d76-sub-5",
        "title": "Encoder-decoder architecture",
        "dayNumber": 76,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d76-sub-6",
        "title": "Attention mechanism",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-7",
        "title": "Self-attention",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-8",
        "title": "Multi-head attention",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-9",
        "title": "Query, Key and Value",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-10",
        "title": "Positional encoding",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-11",
        "title": "Feed-forward networks",
        "dayNumber": 76,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d76-sub-12",
        "title": "Transformer architecture workflow",
        "dayNumber": 76,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 77,
    "title": "Embeddings and Model Inference",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d77-sub-1",
        "title": "Word embeddings",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-2",
        "title": "Sentence embeddings",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-3",
        "title": "Vector representations",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-4",
        "title": "Embedding dimensions",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-5",
        "title": "Semantic similarity",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-6",
        "title": "Cosine similarity",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-7",
        "title": "Context windows",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-8",
        "title": "Model inference",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-9",
        "title": "Temperature",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-10",
        "title": "Top-K sampling",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-11",
        "title": "Top-P sampling",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-12",
        "title": "Quantization",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d77-sub-13",
        "title": "Model latency and throughput",
        "dayNumber": 77,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 78,
    "title": "Prompt Engineering and LLM Integration",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d78-sub-1",
        "title": "Prompt engineering",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-2",
        "title": "System prompts",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-3",
        "title": "User prompts",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-4",
        "title": "Zero-shot prompting",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-5",
        "title": "Few-shot prompting",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-6",
        "title": "Role prompting",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-7",
        "title": "Chain-of-thought concepts",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-8",
        "title": "Prompt templates",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-9",
        "title": "Structured outputs",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-10",
        "title": "JSON output",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-11",
        "title": "Function calling",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-12",
        "title": "Tool calling",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-13",
        "title": "Hallucinations",
        "dayNumber": 78,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d78-sub-14",
        "title": "Fine-tuning vs RAG",
        "dayNumber": 78,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d78-sub-15",
        "title": "LLM evaluation",
        "dayNumber": 78,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      }
    ]
  },
  {
    "dayNumber": 79,
    "title": "RAG Architecture and Data Ingestion",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d79-sub-1",
        "title": "Retrieval-Augmented Generation",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-2",
        "title": "RAG architecture",
        "dayNumber": 79,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d79-sub-3",
        "title": "Retrieval pipeline",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-4",
        "title": "Generation pipeline",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-5",
        "title": "Document loaders",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-6",
        "title": "PDF parsing",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-7",
        "title": "Text extraction",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-8",
        "title": "Data cleaning",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-9",
        "title": "Metadata extraction",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-10",
        "title": "Document ingestion",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d79-sub-11",
        "title": "Indexing pipeline",
        "dayNumber": 79,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 80,
    "title": "Chunking and Embeddings",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d80-sub-1",
        "title": "Document chunking",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-2",
        "title": "Fixed-size chunking",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-3",
        "title": "Recursive chunking",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-4",
        "title": "Semantic chunking",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-5",
        "title": "Chunk size",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-6",
        "title": "Chunk overlap",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-7",
        "title": "Embedding models",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-8",
        "title": "Embedding generation",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-9",
        "title": "Vector representation",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d80-sub-10",
        "title": "Embedding storage",
        "dayNumber": 80,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d80-sub-11",
        "title": "Embedding model selection",
        "dayNumber": 80,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 81,
    "title": "Vector Databases and Retrieval",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d81-sub-1",
        "title": "Vector databases",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-2",
        "title": "ChromaDB",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-3",
        "title": "FAISS",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-4",
        "title": "Pinecone fundamentals",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-5",
        "title": "Vector indexing",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-6",
        "title": "Similarity search",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-7",
        "title": "Cosine similarity",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-8",
        "title": "Euclidean distance",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-9",
        "title": "Top-K retrieval",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-10",
        "title": "Metadata filtering",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-11",
        "title": "Vector database operations",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d81-sub-12",
        "title": "Retrieval pipeline",
        "dayNumber": 81,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 82,
    "title": "Advanced RAG and Evaluation",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d82-sub-1",
        "title": "Dense retrieval",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-2",
        "title": "Sparse retrieval",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-3",
        "title": "Hybrid search",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-4",
        "title": "Reranking",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-5",
        "title": "Query rewriting",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-6",
        "title": "Query expansion",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-7",
        "title": "Parent-child retrieval",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-8",
        "title": "Context precision",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-9",
        "title": "Context recall",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-10",
        "title": "RAGAS fundamentals",
        "dayNumber": 82,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d82-sub-11",
        "title": "Advanced RAG",
        "dayNumber": 82,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d82-sub-12",
        "title": "Agentic RAG",
        "dayNumber": 82,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d82-sub-13",
        "title": "Hallucination reduction",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d82-sub-14",
        "title": "Retrieval evaluation",
        "dayNumber": 82,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 83,
    "title": "LangChain Core",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d83-sub-1",
        "title": "LangChain architecture",
        "dayNumber": 83,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d83-sub-2",
        "title": "Model integrations",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-3",
        "title": "Chat models",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-4",
        "title": "Prompt templates",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-5",
        "title": "Output parsers",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-6",
        "title": "Chains",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-7",
        "title": "Sequential chains concepts",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-8",
        "title": "LCEL",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-9",
        "title": "Runnable interfaces",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d83-sub-10",
        "title": "Structured outputs",
        "dayNumber": 83,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 84,
    "title": "LangChain Application Components",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d84-sub-1",
        "title": "Document loaders",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-2",
        "title": "Text splitters",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-3",
        "title": "Retrievers",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-4",
        "title": "Vector stores",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-5",
        "title": "Tools",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-6",
        "title": "Tool integration",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-7",
        "title": "Retrieval chains",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-8",
        "title": "RAG implementation",
        "dayNumber": 84,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d84-sub-9",
        "title": "Conversation history",
        "dayNumber": 84,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d84-sub-10",
        "title": "LangChain application architecture",
        "dayNumber": 84,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 85,
    "title": "LangGraph Fundamentals",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d85-sub-1",
        "title": "Graph-based workflows",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-2",
        "title": "StateGraph",
        "dayNumber": 85,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d85-sub-3",
        "title": "State management",
        "dayNumber": 85,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d85-sub-4",
        "title": "Nodes",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-5",
        "title": "Edges",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-6",
        "title": "START and END",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-7",
        "title": "Reducers",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-8",
        "title": "Conditional edges",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-9",
        "title": "Routing",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d85-sub-10",
        "title": "Graph execution",
        "dayNumber": 85,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 86,
    "title": "Advanced LangGraph",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d86-sub-1",
        "title": "Cycles",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-2",
        "title": "Checkpointing",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-3",
        "title": "Persistence",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-4",
        "title": "Interrupts",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-5",
        "title": "Human-in-the-loop",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-6",
        "title": "Streaming",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-7",
        "title": "State recovery",
        "dayNumber": 86,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d86-sub-8",
        "title": "Workflow execution",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-9",
        "title": "Error handling",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d86-sub-10",
        "title": "Durable execution concepts",
        "dayNumber": 86,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 87,
    "title": "AI Agent Architecture",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d87-sub-1",
        "title": "AI agent fundamentals",
        "dayNumber": 87,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d87-sub-2",
        "title": "Agent architecture",
        "dayNumber": 87,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d87-sub-3",
        "title": "Agent loop",
        "dayNumber": 87,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d87-sub-4",
        "title": "Reasoning and planning",
        "dayNumber": 87,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d87-sub-5",
        "title": "ReAct architecture",
        "dayNumber": 87,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d87-sub-6",
        "title": "Tool calling",
        "dayNumber": 87,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d87-sub-7",
        "title": "Function calling",
        "dayNumber": 87,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d87-sub-8",
        "title": "Action execution",
        "dayNumber": 87,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d87-sub-9",
        "title": "Agent workflows",
        "dayNumber": 87,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d87-sub-10",
        "title": "Workflow vs agent",
        "dayNumber": 87,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      }
    ]
  },
  {
    "dayNumber": 88,
    "title": "Agent Memory and Multi-Agent Systems",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d88-sub-1",
        "title": "Short-term memory",
        "dayNumber": 88,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d88-sub-2",
        "title": "Long-term memory",
        "dayNumber": 88,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d88-sub-3",
        "title": "Conversation memory",
        "dayNumber": 88,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d88-sub-4",
        "title": "Persistent memory",
        "dayNumber": 88,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d88-sub-5",
        "title": "State management",
        "dayNumber": 88,
        "subSubtopics": [
          "Render cycle triggers & dependency arrays",
          "State immutability and memory leaks",
          "Component composition patterns"
        ]
      },
      {
        "id": "d88-sub-6",
        "title": "Multi-agent architecture",
        "dayNumber": 88,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d88-sub-7",
        "title": "Agent orchestration",
        "dayNumber": 88,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d88-sub-8",
        "title": "Agent collaboration",
        "dayNumber": 88,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d88-sub-9",
        "title": "Task delegation",
        "dayNumber": 88,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d88-sub-10",
        "title": "Agent communication",
        "dayNumber": 88,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d88-sub-11",
        "title": "Multi-agent workflows",
        "dayNumber": 88,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      }
    ]
  },
  {
    "dayNumber": 89,
    "title": "MCP and Production Agents",
    "moduleId": "module-m",
    "moduleLetter": "M",
    "moduleName": "LLMs, RAG and Agentic AI",
    "subtopics": [
      {
        "id": "d89-sub-1",
        "title": "Model Context Protocol",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-2",
        "title": "MCP architecture",
        "dayNumber": 89,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d89-sub-3",
        "title": "MCP clients",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-4",
        "title": "MCP servers",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-5",
        "title": "MCP tools",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-6",
        "title": "MCP resources",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-7",
        "title": "MCP prompts",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-8",
        "title": "Tool permissions",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-9",
        "title": "Human approval",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-10",
        "title": "Guardrails",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-11",
        "title": "Agent evaluation",
        "dayNumber": 89,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d89-sub-12",
        "title": "Agent observability",
        "dayNumber": 89,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d89-sub-13",
        "title": "Failure handling",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-14",
        "title": "Responsible AI",
        "dayNumber": 89,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d89-sub-15",
        "title": "Production agent architecture",
        "dayNumber": 89,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      }
    ]
  },
  {
    "dayNumber": 90,
    "title": "Requirements and Estimation",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d90-sub-1",
        "title": "Functional requirements",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-2",
        "title": "Non-functional requirements",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-3",
        "title": "Use cases",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-4",
        "title": "Capacity estimation",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-5",
        "title": "Traffic estimation",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-6",
        "title": "QPS",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-7",
        "title": "Storage estimation",
        "dayNumber": 90,
        "subSubtopics": [
          "Mathematical foundation & pipeline design",
          "Prompt tokens, context window & retrieval accuracy",
          "Production evaluation & guardrail verification"
        ]
      },
      {
        "id": "d90-sub-8",
        "title": "Bandwidth estimation",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d90-sub-9",
        "title": "System constraints",
        "dayNumber": 90,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 91,
    "title": "Scalability and Availability",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d91-sub-1",
        "title": "Vertical scaling",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-2",
        "title": "Horizontal scaling",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-3",
        "title": "Load balancing",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-4",
        "title": "Reverse proxies",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-5",
        "title": "Latency",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-6",
        "title": "Throughput",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-7",
        "title": "Availability",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-8",
        "title": "Reliability",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-9",
        "title": "Fault tolerance",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d91-sub-10",
        "title": "High availability",
        "dayNumber": 91,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 92,
    "title": "Database and Caching Design",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d92-sub-1",
        "title": "SQL vs NoSQL",
        "dayNumber": 92,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d92-sub-2",
        "title": "Database selection",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-3",
        "title": "Indexing",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-4",
        "title": "Replication",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-5",
        "title": "Sharding",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-6",
        "title": "Partitioning",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-7",
        "title": "Caching fundamentals",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-8",
        "title": "Cache invalidation",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-9",
        "title": "Cache eviction",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-10",
        "title": "CDN",
        "dayNumber": 92,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d92-sub-11",
        "title": "Read and write patterns",
        "dayNumber": 92,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      }
    ]
  },
  {
    "dayNumber": 93,
    "title": "Distributed Messaging",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d93-sub-1",
        "title": "Message queues",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-2",
        "title": "Synchronous vs asynchronous communication",
        "dayNumber": 93,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d93-sub-3",
        "title": "Kafka architecture",
        "dayNumber": 93,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d93-sub-4",
        "title": "Producers",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-5",
        "title": "Consumers",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-6",
        "title": "Topics",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-7",
        "title": "Partitions",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-8",
        "title": "Offsets",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-9",
        "title": "Consumer groups",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d93-sub-10",
        "title": "Event-driven architecture",
        "dayNumber": 93,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d93-sub-11",
        "title": "Message delivery guarantees",
        "dayNumber": 93,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 94,
    "title": "Microservices Architecture",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d94-sub-1",
        "title": "Monolith vs microservices",
        "dayNumber": 94,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      },
      {
        "id": "d94-sub-2",
        "title": "Microservices fundamentals",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-3",
        "title": "API Gateway",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-4",
        "title": "Service discovery",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-5",
        "title": "Inter-service communication",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-6",
        "title": "REST communication",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-7",
        "title": "Event-driven communication",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-8",
        "title": "Circuit breaker",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-9",
        "title": "Retries",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-10",
        "title": "Resilience",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d94-sub-11",
        "title": "Distributed tracing",
        "dayNumber": 94,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 95,
    "title": "Distributed Systems",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d95-sub-1",
        "title": "Distributed system fundamentals",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-2",
        "title": "CAP theorem",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-3",
        "title": "Consistency",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-4",
        "title": "Eventual consistency",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-5",
        "title": "Distributed transactions",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-6",
        "title": "Two-phase commit concepts",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-7",
        "title": "Saga pattern",
        "dayNumber": 95,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d95-sub-8",
        "title": "Idempotency",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-9",
        "title": "Rate limiting",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-10",
        "title": "Fault tolerance",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d95-sub-11",
        "title": "Observability",
        "dayNumber": 95,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 96,
    "title": "System Design Case Studies",
    "moduleId": "module-n",
    "moduleLetter": "N",
    "moduleName": "HLD and System Design",
    "subtopics": [
      {
        "id": "d96-sub-1",
        "title": "URL shortener",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-2",
        "title": "WhatsApp-like messaging system",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-3",
        "title": "Notification system",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-4",
        "title": "E-commerce platform",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-5",
        "title": "Requirement analysis",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-6",
        "title": "API design",
        "dayNumber": 96,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d96-sub-7",
        "title": "Database schema",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-8",
        "title": "Component architecture",
        "dayNumber": 96,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d96-sub-9",
        "title": "Scaling decisions",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d96-sub-10",
        "title": "Trade-offs",
        "dayNumber": 96,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 97,
    "title": "Core Java Interviews",
    "moduleId": "module-o",
    "moduleLetter": "O",
    "moduleName": "Interview Preparation",
    "subtopics": [
      {
        "id": "d97-sub-1",
        "title": "Java fundamentals",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-2",
        "title": "OOP interview questions",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-3",
        "title": "Collections interview questions",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-4",
        "title": "HashMap internal working",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-5",
        "title": "Concurrency questions",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-6",
        "title": "JVM and memory questions",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-7",
        "title": "Java coding problems",
        "dayNumber": 97,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d97-sub-8",
        "title": "Frequently asked differences",
        "dayNumber": 97,
        "subSubtopics": [
          "Core behavioral differences & use cases",
          "Performance, memory, and syntax comparison",
          "Interview tricky questions & edge cases"
        ]
      }
    ]
  },
  {
    "dayNumber": 98,
    "title": "Backend and DSA Interviews",
    "moduleId": "module-o",
    "moduleLetter": "O",
    "moduleName": "Interview Preparation",
    "subtopics": [
      {
        "id": "d98-sub-1",
        "title": "DSA patterns",
        "dayNumber": 98,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d98-sub-2",
        "title": "Array and String problems",
        "dayNumber": 98,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d98-sub-3",
        "title": "Hashing problems",
        "dayNumber": 98,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d98-sub-4",
        "title": "Tree and graph problems",
        "dayNumber": 98,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d98-sub-5",
        "title": "SQL queries",
        "dayNumber": 98,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d98-sub-6",
        "title": "Spring Boot interview questions",
        "dayNumber": 98,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d98-sub-7",
        "title": "REST API questions",
        "dayNumber": 98,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d98-sub-8",
        "title": "JPA and Hibernate",
        "dayNumber": 98,
        "subSubtopics": [
          "Annotation configuration & container management",
          "Underlying abstraction & bean lifecycle",
          "Common pitfalls and N+1 / transaction issues"
        ]
      },
      {
        "id": "d98-sub-9",
        "title": "Spring Security and JWT",
        "dayNumber": 98,
        "subSubtopics": [
          "Threat model & attack vectors",
          "Token lifecycle, signing, and validation",
          "Best practices and configuration rules"
        ]
      }
    ]
  },
  {
    "dayNumber": 99,
    "title": "Design and Project Interviews",
    "moduleId": "module-o",
    "moduleLetter": "O",
    "moduleName": "Interview Preparation",
    "subtopics": [
      {
        "id": "d99-sub-1",
        "title": "SOLID principles",
        "dayNumber": 99,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d99-sub-2",
        "title": "Design patterns",
        "dayNumber": 99,
        "subSubtopics": [
          "Intent and problem statement addressed",
          "UML class diagram and coupling reduction",
          "Real-world enterprise application example"
        ]
      },
      {
        "id": "d99-sub-3",
        "title": "LLD questions",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d99-sub-4",
        "title": "HLD questions",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d99-sub-5",
        "title": "Distributed system concepts",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d99-sub-6",
        "title": "Project architecture",
        "dayNumber": 99,
        "subSubtopics": [
          "Internal workflow & step-by-step phases",
          "Key components & execution environment",
          "Debugging and monitoring checkpoints"
        ]
      },
      {
        "id": "d99-sub-7",
        "title": "Technical decision-making",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d99-sub-8",
        "title": "Trade-offs",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d99-sub-9",
        "title": "Project explanation",
        "dayNumber": 99,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  },
  {
    "dayNumber": 100,
    "title": "Final Interview Simulation",
    "moduleId": "module-o",
    "moduleLetter": "O",
    "moduleName": "Interview Preparation",
    "subtopics": [
      {
        "id": "d100-sub-1",
        "title": "Mock technical interview",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-2",
        "title": "DSA coding round",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-3",
        "title": "Java rapid-fire questions",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-4",
        "title": "Backend interview simulation",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-5",
        "title": "LLD/HLD discussion",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-6",
        "title": "Resume walkthrough",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-7",
        "title": "Behavioral questions",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-8",
        "title": "Weak-topic revision",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      },
      {
        "id": "d100-sub-9",
        "title": "Final preparation",
        "dayNumber": 100,
        "subSubtopics": [
          "Key principles and foundational definition",
          "Code implementation and syntax conventions",
          "Practical scenario and edge-case handling"
        ]
      }
    ]
  }
];
