function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

async function addProblem(req, res) {
  return res.status(500).json({
    "msg":"not implemneted yet"
  })
}

async function getProblem(req, res, next) {
 return res.status(500).json({
    "msg":"not implemneted yet"
  })
}

async function getProblems(req, res, next) {
   return res.status(500).json({
    "msg":"not implemneted yet"
  })
}

async function deleteProblem(req, res, next) {
 return res.status(500).json({
    "msg":"not implemneted yet"
  })
}

function updateProblem(req, res, next) {
   return res.status(500).json({
    "msg":"not implemneted yet"
  })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}

