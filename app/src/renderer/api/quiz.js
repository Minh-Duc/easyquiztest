/**
 * Mocking client-server processing
 */
const _quizs = [{
  'id': 1,
  'type': 'checkbox',
  'description': 'what ???',
  'answers': [{
    'id': 'A',
    'content': 'Nội dung đáp án A'
  },
  {
    'id': 'B',
    'content': 'Nội dung đáp án B'
  },
  {
    'id': 'C',
    'content': 'Nội dung đáp án C'
  },
  {
    'id': 'D',
    'content': 'Nội dung đáp án D'
  }
  ],
  'isAnswered': false,
  'userCheck': ['A', 'B']
},
{
  'id': 2,
  'type': 'radio',
  'description': 'what 2???',
  'answers': [{
    'id': 'A',
    'content': 'Nội dung đáp án A'
  },
  {
    'id': 'B',
    'content': 'Nội dung đáp án B'
  },
  {
    'id': 'C',
    'content': 'Nội dung đáp án C'
  },
  {
    'id': 'D',
    'content': 'Nội dung đáp án D'
  }
  ],
  'isAnswered': false,
  'correctAnswers': ['A'],
  'userCheck': ['B']

},
{
  'id': 3,
  'type': 'radio',
  'description': 'what 3???',
  'answers': [{
    'id': 'A',
    'content': 'Nội dung đáp án A'
  },
  {
    'id': 'B',
    'content': 'Nội dung đáp án B'
  },
  {
    'id': 'C',
    'content': 'Nội dung đáp án C'
  },
  {
    'id': 'D',
    'content': 'Nội dung đáp án D'
  }
  ],
  'isAnswered': false,
  'correctAnswers': ['A'],
  'userCheck': []

}

]

export default {
  getQuizs () {
    return Promise.resolve(_quizs)
  }
}
