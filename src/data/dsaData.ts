// Parallel DSA Revision Track Data
// Comprehensive DSA syllabus for developer interviews

export interface DsaTopic {
  id: string;
  category: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  patterns: string[];
}

export interface DsaCategory {
  id: string;
  title: string;
  description: string;
  topics: DsaTopic[];
}

export const DSA_CATEGORIES: DsaCategory[] = [
  {
    id: 'dsa-arrays-hashing',
    title: 'Arrays & Hashing',
    description: 'Fundamental lookup patterns, frequency counting, and index hashing.',
    topics: [
      {
        id: 'dsa-1',
        category: 'Arrays & Hashing',
        title: 'Two Sum & Pair Lookup',
        difficulty: 'Easy',
        description: 'Single-pass hash table complement check for O(n) time complexity.',
        patterns: ['Hash Map Complement', 'Index Mapping', 'O(n) time / O(n) space']
      },
      {
        id: 'dsa-2',
        category: 'Arrays & Hashing',
        title: 'Valid Anagram & Frequency Hashing',
        difficulty: 'Easy',
        description: 'Frequency array or map counting character occurrences across strings.',
        patterns: ['Frequency Count Table', 'ASCII Vector', 'Anagram Invariant']
      },
      {
        id: 'dsa-3',
        category: 'Arrays & Hashing',
        title: 'Group Anagrams',
        difficulty: 'Medium',
        description: 'Canonical string sorting or 26-element tuple as hash map key.',
        patterns: ['Canonical Key Hashing', 'Hash Map of Lists', 'String Canonicalization']
      },
      {
        id: 'dsa-4',
        category: 'Arrays & Hashing',
        title: 'Top K Frequent Elements',
        difficulty: 'Medium',
        description: 'Bucket sort or min-heap to find high frequency elements in O(n) or O(n log k).',
        patterns: ['Bucket Sort', 'Frequency Buckets', 'Min-Heap Selection']
      },
      {
        id: 'dsa-5',
        category: 'Arrays & Hashing',
        title: 'Product of Array Except Self',
        difficulty: 'Medium',
        description: 'Prefix product and suffix product accumulators without division in O(1) extra space.',
        patterns: ['Prefix & Suffix Accumulator', 'In-place Traversal', 'Running Product']
      },
      {
        id: 'dsa-6',
        category: 'Arrays & Hashing',
        title: 'Longest Consecutive Sequence',
        difficulty: 'Medium',
        description: 'HashSet lookups identifying sequence starts where (num - 1) is absent in O(n) time.',
        patterns: ['Hash Set Membership', 'Sequence Start Boundary', 'Linear Exploration']
      }
    ]
  },
  {
    id: 'dsa-two-pointers',
    title: 'Two Pointers & Sliding Window',
    description: 'Opposite-end convergence, fast & slow pointers, and dynamic window expansion/shrinkage.',
    topics: [
      {
        id: 'dsa-7',
        category: 'Two Pointers & Sliding Window',
        title: 'Valid Palindrome & Pointer Convergence',
        difficulty: 'Easy',
        description: 'Left and right pointers skipping non-alphanumeric characters towards center.',
        patterns: ['Converging Pointers', 'Character Filtering', 'Two-Way Traversal']
      },
      {
        id: 'dsa-8',
        category: 'Two Pointers & Sliding Window',
        title: 'Two Sum II (Sorted Input)',
        difficulty: 'Medium',
        description: 'Directional adjustment based on sum comparison vs target.',
        patterns: ['Sorted Array Invariant', 'Shrinking Search Space', 'O(1) Memory']
      },
      {
        id: 'dsa-9',
        category: 'Two Pointers & Sliding Window',
        title: '3Sum Triplet Finding',
        difficulty: 'Medium',
        description: 'Sorting plus outer iteration with two-pointer inner scan, skipping duplicates.',
        patterns: ['Duplicate Avoidance', 'Fixed Pivot + Two Pointers', 'Sorted Triplet Reduction']
      },
      {
        id: 'dsa-10',
        category: 'Two Pointers & Sliding Window',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        description: 'Greedy inward step of the shorter vertical boundary line.',
        patterns: ['Greedy Boundary Shift', 'Area Maximization', 'Bottleneck Elimination']
      },
      {
        id: 'dsa-11',
        category: 'Two Pointers & Sliding Window',
        title: 'Trapping Rain Water',
        difficulty: 'Hard',
        description: 'LeftMax and RightMax running barriers with converging two-pointer scan.',
        patterns: ['Barrier Traversal', 'Water Elevation Min-Cap', 'O(1) Space Two Pointers']
      },
      {
        id: 'dsa-12',
        category: 'Two Pointers & Sliding Window',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        description: 'Sliding window with frequency map or last seen index array.',
        patterns: ['Dynamic Right Expansion', 'Left Boundary Jump', 'Last Seen Map']
      },
      {
        id: 'dsa-13',
        category: 'Two Pointers & Sliding Window',
        title: 'Minimum Window Substring',
        difficulty: 'Hard',
        description: 'Window expansion until valid, followed by greedy contraction to minimize length.',
        patterns: ['Required Match Counter', 'Sliding Window Contraction', 'Global Min Length']
      }
    ]
  },
  {
    id: 'dsa-stack-queue',
    title: 'Stack & Monotonic Queue',
    description: 'LIFO evaluation, parentheses balancing, and monotonic stack boundary calculations.',
    topics: [
      {
        id: 'dsa-14',
        category: 'Stack & Monotonic Queue',
        title: 'Valid Parentheses & Bracket Matching',
        difficulty: 'Easy',
        description: 'Stack validation matching closing bracket against most recent open bracket.',
        patterns: ['LIFO Pairing', 'Matching Map', 'Early Rejection']
      },
      {
        id: 'dsa-15',
        category: 'Stack & Monotonic Queue',
        title: 'Min Stack with Constant Time Retrieval',
        difficulty: 'Medium',
        description: 'Auxiliary minimum tracking stack or delta storage for O(1) getMin().',
        patterns: ['Companion Stack', 'Prefix Min Invariant', 'O(1) Lookup']
      },
      {
        id: 'dsa-16',
        category: 'Stack & Monotonic Queue',
        title: 'Daily Temperatures & Next Greater Element',
        difficulty: 'Medium',
        description: 'Monotonic decreasing stack storing indices to resolve next greater element in O(n).',
        patterns: ['Monotonic Stack', 'Index Difference Span', 'One-Pass Resolution']
      },
      {
        id: 'dsa-17',
        category: 'Stack & Monotonic Queue',
        title: 'Largest Rectangle in Histogram',
        difficulty: 'Hard',
        description: 'Monotonic increasing stack identifying nearest smaller left and right boundaries.',
        patterns: ['Monotonic Boundary Resolution', 'Height Pop & Area Calculation', 'Sentinel Value']
      }
    ]
  },
  {
    id: 'dsa-binary-search',
    title: 'Binary Search',
    description: 'Logarithmic search space reduction on sorted arrays, rotated arrays, and answer spaces.',
    topics: [
      {
        id: 'dsa-18',
        category: 'Binary Search',
        title: 'Standard Binary Search & Invariant Maintenance',
        difficulty: 'Easy',
        description: 'Safe mid calculation avoiding overflow (low + (high - low) / 2) with exact bounds.',
        patterns: ['Boundary Invariant', 'Overflow-safe Mid', 'Logarithmic Halving']
      },
      {
        id: 'dsa-19',
        category: 'Binary Search',
        title: 'Search a 2D Matrix',
        difficulty: 'Medium',
        description: 'Treating m x n matrix as 1D virtual sorted array with div/mod indexing.',
        patterns: ['Virtual Flattening', 'Row/Col Coordinate Mapping', 'O(log(m*n))']
      },
      {
        id: 'dsa-20',
        category: 'Binary Search',
        title: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        description: 'Determine which half (left or right) is sorted before deciding navigation branch.',
        patterns: ['Sorted Half Identification', 'Pivot Invariant', 'Rotated Array Division']
      },
      {
        id: 'dsa-21',
        category: 'Binary Search',
        title: 'Koko Eating Bananas (Binary Search on Answer)',
        difficulty: 'Medium',
        description: 'Binary search on eat-rate speed [1..max_pile] evaluating feasibility predicate.',
        patterns: ['Answer Space Search', 'Feasibility Check Function', 'Monotonic Predicate']
      },
      {
        id: 'dsa-22',
        category: 'Binary Search',
        title: 'Median of Two Sorted Arrays',
        difficulty: 'Hard',
        description: 'Binary searching the partition point in smaller array ensuring balanced left halves.',
        patterns: ['Partition Boundary Search', 'Max-Left vs Min-Right', 'O(log(min(m,n)))']
      }
    ]
  },
  {
    id: 'dsa-linked-list',
    title: 'Linked List',
    description: 'Node manipulation, pointer rewiring, cycle detection, and memory cache architecture.',
    topics: [
      {
        id: 'dsa-23',
        category: 'Linked List',
        title: 'Reverse Linked List (Iterative & Recursive)',
        difficulty: 'Easy',
        description: 'Three-pointer state tracking (prev, curr, next) for in-place pointer reversal.',
        patterns: ['Prev-Curr-Next Pointers', 'Null Termination', 'In-place Pointer Flip']
      },
      {
        id: 'dsa-24',
        category: 'Linked List',
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        description: 'Dummy head node technique cleanly avoiding edge cases for list stitching.',
        patterns: ['Dummy Node Sentinel', 'Linear Comparison', 'Tail Splicing']
      },
      {
        id: 'dsa-25',
        category: 'Linked List',
        title: 'Linked List Cycle & Floyd Cycle Detection',
        difficulty: 'Medium',
        description: 'Slow (1 step) and Fast (2 steps) pointer meeting point and cycle start recovery.',
        patterns: ["Floyd's Tortoise & Hare", 'Relative Speed Proof', 'Cycle Entrance Offset']
      },
      {
        id: 'dsa-26',
        category: 'Linked List',
        title: 'LRU Cache Design',
        difficulty: 'Medium',
        description: 'Hash Map paired with Doubly Linked List for O(1) get and put with eviction.',
        patterns: ['Doubly Linked List + Map', 'Pseudo Head & Tail', 'O(1) Node Relocation']
      },
      {
        id: 'dsa-27',
        category: 'Linked List',
        title: 'Merge K Sorted Lists',
        difficulty: 'Hard',
        description: 'Min-heap of k node pointers or divide-and-conquer pairwise list merging in O(N log k).',
        patterns: ['Priority Queue Heap', 'Divide and Conquer', 'K-way Merging']
      }
    ]
  },
  {
    id: 'dsa-trees',
    title: 'Trees & Binary Search Trees',
    description: 'Hierarchical traversals (DFS/BFS), subtree properties, and BST search invariants.',
    topics: [
      {
        id: 'dsa-28',
        category: 'Trees & Binary Search Trees',
        title: 'Tree Traversals (In-order, Pre-order, Post-order, Level-order)',
        difficulty: 'Easy',
        description: 'Recursive call stack DFS vs queue-based BFS layer iteration.',
        patterns: ['Recursive DFS', 'Queue-based BFS', 'Level Size Tracking']
      },
      {
        id: 'dsa-29',
        category: 'Trees & Binary Search Trees',
        title: 'Maximum Depth & Diameter of Binary Tree',
        difficulty: 'Easy',
        description: 'Bottom-up height calculation maintaining global maximum path across root.',
        patterns: ['Post-order Height Return', 'Global Variable Tracking', 'Leaf Base Cases']
      },
      {
        id: 'dsa-30',
        category: 'Trees & Binary Search Trees',
        title: 'Lowest Common Ancestor (LCA)',
        difficulty: 'Medium',
        description: 'Parent pointer equality check or recursive bottom-up node presence return.',
        patterns: ['Bottom-up Convergence', 'Left & Right Subtree Match', 'BST Value Routing']
      },
      {
        id: 'dsa-31',
        category: 'Trees & Binary Search Trees',
        title: 'Validate Binary Search Tree (BST)',
        difficulty: 'Medium',
        description: 'Range bounding (minVal, maxVal) propagation or strictly increasing in-order traversal.',
        patterns: ['Range Invariant (min, max)', 'In-order Ascending Check', 'Long Boundary Limits']
      },
      {
        id: 'dsa-32',
        category: 'Trees & Binary Search Trees',
        title: 'Construct Binary Tree from Preorder and Inorder Traversal',
        difficulty: 'Medium',
        description: 'Root identification from preorder with hash map lookup in inorder to partition subtrees.',
        patterns: ['Preorder Root Index', 'Inorder Map Partitioning', 'Recursive Subtree Slicing']
      },
      {
        id: 'dsa-33',
        category: 'Trees & Binary Search Trees',
        title: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        description: 'Preorder or level-order string serialization with null delimiter and queue reconstruction.',
        patterns: ['String Tokenizer', 'Queue-based Reconstruction', 'Delimiter Handling']
      }
    ]
  },
  {
    id: 'dsa-graphs',
    title: 'Graphs & Topological Sort',
    description: 'Adjacency lists, cycle detection in directed/undirected graphs, connected components, and BFS/DFS.',
    topics: [
      {
        id: 'dsa-34',
        category: 'Graphs & Topological Sort',
        title: 'Number of Islands (Grid BFS/DFS)',
        difficulty: 'Medium',
        description: 'Flood-fill DFS/BFS marking visited land cells (or mutating to water) in matrix.',
        patterns: ['Grid 4-Directional DFS/BFS', 'Visited Set / In-place Mutation', 'Connected Components']
      },
      {
        id: 'dsa-35',
        category: 'Graphs & Topological Sort',
        title: 'Clone Graph',
        difficulty: 'Medium',
        description: 'Hash map of old node to new node copy with DFS/BFS neighbour wiring.',
        patterns: ['Cloned Node Map', 'Cycle-safe Graph Copy', 'Recursive Neighbour Assignment']
      },
      {
        id: 'dsa-36',
        category: 'Graphs & Topological Sort',
        title: "Course Schedule I & II (Kahn's Algorithm / TopoSort)",
        difficulty: 'Medium',
        description: 'In-degree array with queue processing nodes of degree 0 for topological ordering and cycle detection.',
        patterns: ["Kahn's In-Degree Queue", 'Topological Ordering', 'DAG Cycle Detection']
      },
      {
        id: 'dsa-37',
        category: 'Graphs & Topological Sort',
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'Medium',
        description: 'Reverse exploration from ocean boundaries inwards to find intersection cells.',
        patterns: ['Reverse Multi-Source BFS/DFS', 'Set Intersection', 'Height Barrier Check']
      },
      {
        id: 'dsa-38',
        category: 'Graphs & Topological Sort',
        title: 'Word Ladder (Shortest Path Unweighted Graph)',
        difficulty: 'Hard',
        description: 'Bidirectional BFS exploring single-character mutations to find shortest transformation sequence.',
        patterns: ['Shortest Path BFS', 'Wildcard Pattern Grouping', 'Bidirectional Search']
      }
    ]
  },
  {
    id: 'dsa-dynamic-programming',
    title: 'Dynamic Programming',
    description: 'Overlapping subproblems, optimal substructure, memoization, and bottom-up tabulation.',
    topics: [
      {
        id: 'dsa-39',
        category: 'Dynamic Programming',
        title: 'Climbing Stairs & Fibonacci Transitions',
        difficulty: 'Easy',
        description: 'State transition dp[i] = dp[i-1] + dp[i-2] with O(1) space two-variable rolling memo.',
        patterns: ['1D Rolling State', 'Fibonacci Recurrence', 'O(1) Space Optimization']
      },
      {
        id: 'dsa-40',
        category: 'Dynamic Programming',
        title: 'House Robber I & II (Linear & Circular)',
        difficulty: 'Medium',
        description: 'Decision state rob vs skip, running two passes on sliced array for circular boundary.',
        patterns: ['Include / Exclude Choice', 'Circular Slice Splitting', 'O(1) Memory Array']
      },
      {
        id: 'dsa-41',
        category: 'Dynamic Programming',
        title: 'Coin Change (Unbounded Knapsack)',
        difficulty: 'Medium',
        description: 'Bottom-up array dp[amt] = min(dp[amt], 1 + dp[amt - coin]) initialized to infinity.',
        patterns: ['Unbounded Knapsack', 'Min Value Accumulation', 'Bottom-Up Tabulation']
      },
      {
        id: 'dsa-42',
        category: 'Dynamic Programming',
        title: 'Longest Increasing Subsequence (LIS)',
        difficulty: 'Medium',
        description: 'O(n^2) dp state or O(n log n) patience sorting with binary search insertion point.',
        patterns: ['Patience Sorting', 'Binary Search (Arrays.binarySearch)', 'O(n log n) Optimization']
      },
      {
        id: 'dsa-43',
        category: 'Dynamic Programming',
        title: '0/1 Knapsack & Subset Sum',
        difficulty: 'Medium',
        description: 'Classic 2D table or 1D reverse-iterated array for item inclusion without duplicate usage.',
        patterns: ['Reverse 1D Array Iteration', 'Target Sum Splitting', 'Discrete Choice Optimization']
      },
      {
        id: 'dsa-44',
        category: 'Dynamic Programming',
        title: 'Edit Distance (Levenshtein Distance)',
        difficulty: 'Hard',
        description: '2D matrix matching characters and taking min(insert, delete, replace) + 1.',
        patterns: ['2D Grid DP', 'String Alignment Invariant', 'Prefix Matching Matrix']
      }
    ]
  },
  {
    id: 'dsa-patterns-interviews',
    title: 'Interview Patterns & Mock Coding Rounds',
    description: 'High-frequency algorithmic templates and technical coding interview strategies.',
    topics: [
      {
        id: 'dsa-45',
        category: 'Interview Patterns & Mock Coding Rounds',
        title: '14 Core LeetCode Patterns Cheatsheet',
        difficulty: 'Medium',
        description: 'Comprehensive recognition guide for identifying patterns from problem statements.',
        patterns: ['Sliding Window', 'Two Pointers', 'Fast & Slow Pointers', 'Merge Intervals', 'Cyclic Sort']
      },
      {
        id: 'dsa-46',
        category: 'Interview Patterns & Mock Coding Rounds',
        title: 'Backend Database Query Optimization & Indexing Invariants',
        difficulty: 'Medium',
        description: 'B-Tree vs Hash index lookup complexity, composite index prefix rule, and N+1 query elimination.',
        patterns: ['B-Tree Search Depth', 'Leftmost Prefix Index Rule', 'Batch Fetching']
      },
      {
        id: 'dsa-47',
        category: 'Interview Patterns & Mock Coding Rounds',
        title: 'Live 45-Minute Mock Coding Round Simulation',
        difficulty: 'Hard',
        description: 'Simulated technical interview: Clarifying questions, edge cases, brute force, optimal solution, and dry run.',
        patterns: ['Problem Clarification', 'Complexity Analysis', 'Step-by-step Dry Run', 'Clean Production Code']
      }
    ]
  }
];
