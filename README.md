# Kanban Kingdom - Malmö Marvels

## Malmö crew

- 🔥 Eva
- 🐢 Caroline
- 🧀 Mirza (SM sprint 4)
- 🐏 Jason (SM sprint 5)
- 🐻 Aleksei (SM sprint 3)
- 🩰 Linus (SM sprint 1)
- 🐀 Jumi (SM sprint 2)

## Trello Board

[Trello Board](https://trello.com/b/xSi37kkw/board-the-taskmanager-project)

## JSON data

const boards = [
{
id: 1,
title: "",
dateCreated: "",
columns: [
{
id: 1,
title: "",
stories: [
{
id: 1,
title: "",
content: "",
deadLine: "",
dueDate: "",
isUrgent: false,
userOwnership: [],
tasks: [
{
id: 1,
title: "",
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
],
},
];

## Components

grund-komponenter:
Board - renderar ut columns
Column - renderas stories ut (basert på category)
Story - renderar ut tasks (conditional om tasks finns i dess array)
navBar - renderar ut länkar till: info, settings, userProfile
Header -

feature-komponenter:
addStory - skapar en instans av en story (user väljer categoty)
addTask (innuti Story-komponenten - default category)
selectUser: renderar ut options från users-array

URLssss
page-komponenter (inkl. sub-komponenter - löser på egenhand baserat på initialData)
ListPage - renderar ut alla sub-komponenter i en enstaka lista
InfoPage - basic info om appen
SettingsPage - theme settings etc
UserPage - samling av information - settings för namn, tasks, osv.
MissingPage - error msg + return to index
