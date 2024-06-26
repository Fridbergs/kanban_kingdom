export const boards = [
    {
      id: 1,
      title: "Bajs board 1",
      dateCreated: "",
      columns: [
        {
          id: 1,
          title: "todo",
          stories: [
            {
              id: 1,
              title: "story 1",
              content: "",
              deadLine: "",
              dueDate: "",
              isUrgent: false,
              tasks: [
                {
                  id: 1,
                  title: "task 1",
                  content: "",
                  category: "",
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
                {
                  id: 4,
                  title: "task 1",
                  content: "",
                  category: "",
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
                {
                  id: 5,
                  title: "task 1",
                  content: "",
                  category: "",
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "doing",
          stories: [
            {
              id: 2,
              title: "story 2",
              content: "",
              deadLine: "",
              dueDate: "",
              isUrgent: false,
              userOwnership: [],
              tasks: [
                {
                  id: 2,
                  title: "task 2",
                  content: "",
                  category: "",
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "done",
          stories: [
            {
              id: 3,
              title: "story 3",
              content: "",
              deadLine: "",
              dueDate: "",
              isUrgent: false,
              userOwnership: [],
              tasks: [
                {
                  id: 3,
                  title: "task 3",
                  content: "",
                  categories: [],
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const users = [
    {
      id: nanoid,
      name: "",
      photo: "url-link",
      joined: "date",
      description: "",
      isKickedOut: false
    }
  ]