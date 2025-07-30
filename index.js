const core= require('@actions/core');
try {
  const name = core.getInput('name');
  const nombreentorno = core.getInput('nombreentorno');
  console.log(`Hola ${name}!`);
  console.log(`Estas en el entorno ${nombreentorno}!`);
} catch (error) {
  core.setFailed(error.message);
}