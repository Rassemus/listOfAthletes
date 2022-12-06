const db = require("../config/db");

class Athletic {
  constructor(etunimi, sukunimi,syntymävuosi, kutsumanimi,paino, www, laji, saavutukset) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.syntymävuosi = syntymävuosi;
    this.kutsumanimi = kutsumanimi;
    this.paino = paino;
    this.www = www;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    /*let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;*/

    let sql = `INSERT INTO urheilijat(etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset) VALUES('${this.etunimi}', '${this.sukunimi}', '${this.syntymävuosi}','${this.kutsumanimi}','${this.paino}','${this.www}','${this.laji}','${this.saavutukset}')`;

    const [newAthletic, _] = await db.execute(sql);
    return newAthletic;
  }

  static updateById(id, newFirstName, newLastName, newBornYear, newName,newWeight,newWWW,newSport,newRecords) {
    let sql = `UPDATE urheilijat SET etunimi = "${newFirstName}", sukunimi = "${newLastName}", syntymavuosi = "${newBornYear}", kutsumanimi = "${newName}", paino = ${newWeight},www = "${newWWW}",laji = "${newSport}",saavutukset = "${newRecords}" WHERE id=${id}`;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM urheilijat;";
    return db.execute(sql);
  }

  /*static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }*/

  static findById(id) {
    let sql = `SELECT * FROM urheilijat WHERE id=${id};`;

    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM urheilijat WHERE id=${id};`;
    return db.execute(sql);
  }
}

module.exports = Athletic;
