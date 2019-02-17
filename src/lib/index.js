import firebase from "lib/firebase";
export function getUID() {
  return firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
}
export function saveCompany(steps, inputs) {
  console.log("ok then", steps, inputs);
  let company = {
    name: inputs["Firmenname"] || null,
    workers: inputs["Anzahl Mitarbeiter"] || null,
    branche: inputs["Branche"] || null,
    facebook: inputs["Facebook"] || null,
    images: inputs["Fotos und Bilder\n (max. 3 Bilder)"] || [],
    homepage: inputs["Homepage"] || null,
    logo: inputs["Ihr Logo"] || null,
    color: inputs["Ihre Farbe"] || null,
    links: inputs["Ihre Karrierehomepage\nLink Stellenanzeigen"] || null,
    profile: inputs["Kurzprofil"] || null,
    linkedin: inputs["Linkedin"] || null,
    address: inputs["Adresse"] || null,
    plz: inputs["PLZ"] || null,
    city: inputs["Stadt"] || null,
    twitter: inputs["Twitter"] || null,
    why: inputs["Warum Sie bei uns\narbeiten sollten"] || null,
    what: inputs["Was wir bieten"] || null,
    xing: inputs["Xing"] || null,
    video: inputs["Ihr Video"] || null,
    open: inputs["Offene Stellen"] || null,
    time: new Date()
  };
  console.log(company);
  let id = getUID();
  let doc = firebase
    .firestore()
    .collection("company")
    .doc(id);
  return doc.set({ ...company, id: id }).then(r => {
    return { id, name: inputs["Firmenname"] };
  });
}
