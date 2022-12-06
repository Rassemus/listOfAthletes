const Athletic = require("../models/Athletic");

exports.getAll = async (req, res, next) => {
  try {
    const [athletics, _] = await Athletic.findAll();
    res.status(200).json({ count: athletics.length, athletics });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let athleticId = Number(req.params.id);
    let [athletic, _] = await Athletic.findById(athleticId);
    res.status(200).json({ athletic: athletic[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
  try {
    let { etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset } = req.body;

    let athletic = new Athletic(etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset);

    athletic = await athletic.save();

    res.status(201).json({ message: "Athletic created" });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    let athleticId = Number(req.params.id);
    let newFirstName = req.body.etunimi;
    let newLastName = req.body.sukunimi;
    let newBornYear = req.body.syntymavuosi;
    let newName = req.body.kutsumanimi;
    let newWeight = req.body.paino;
    let newWWW = req.body.www;
    let newSport = req.body.laji;
    let newRecords = req.body.saavutukset;
    let updatedAthletic = await Athletic.updateById(athleticId, newFirstName, newLastName,newBornYear,newName,newWeight,newWWW,newSport,newRecords);

    res.status(200).json({ message: "Athletic updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    let athleticId = Number(req.params.id);
    await Athletic.deleteById(athleticId);
    res.status(200).json({ message: "Athletic deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
