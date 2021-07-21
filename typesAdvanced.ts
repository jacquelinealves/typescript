/**
 * TYPE INFERENCE
 */

let message2 = "mensagem definida"; // nesse caso o próprio ts entende que a variável é do tipo string

/**
 * TYPE ALIASES
 *
 * (Atalho/Apelido)
 */

type Uid = number | string; // Type Union

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}
logDetails(123, "Jacqueline");
logDetails("123", "Jacqueline");

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}
logInfo(123, "Jacqueline");
logInfo("123", "Jacqueline");

// Exemplo #2
type Platform = "Windows" | "Linux" | "Mac OS";

function renderPlatform(platform: Platform) {
  return platform;
}
