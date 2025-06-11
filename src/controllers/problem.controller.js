const NotImplemented=require("../errors/notImplemented.error");
function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

async function addProblem(req, res,next) {
  try{
throw new NotImplemented();
  }
  catch(e){
     next(e);   
  }
}

async function getProblem(req, res, next) {
  try{
throw new NotImplemented();
  }
  catch(e){
     next(e);   
  }
}

async function getProblems(req, res, next) {
   try{
throw new NotImplemented();
  }
  catch(e){
     next(e);   
  }
}

async function deleteProblem(req, res, next) {
  try{
throw new NotImplemented();
  }
  catch(e){
     next(e);   
  }
}

function updateProblem(req, res, next) {
   try{
throw new NotImplemented();
  }
  catch(e){
     next(e);   
  }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}

