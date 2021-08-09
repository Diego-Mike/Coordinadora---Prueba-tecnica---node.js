import axios from "axios";

// All methods

export class Challenge {
  // Average of two numbers

  average1 = (req, res) => {
    const { number1, number2 } = req.body;

    if (typeof number1 !== "number" || typeof number2 !== "number") {
      throw new TypeError("Ha ocurrido un error con este reto");
    }

    const response = (number1 + number2) / 2;

    return res.json({
      Resultado: `El resultado de la operación es: ${response}`
    });
  };

  //  String manipulation

  stringManipulation2 = (req, res) => {
    const { characters } = req.body;

    if (typeof characters !== "string") {
      return res.status(400).json({
        Mensaje:
          "El body del request solo debería de contener strings/caracteres"
      });
    }

    let toArray = characters.split("");

    if (toArray[toArray.length - 1] === "!") {
      toArray.splice(toArray.length - 1, 1);
      return res.json({ Resultado: `El string cambió a: ${toArray.join("")}` });
    } else {
      return res.json({
        Resultado: `El string no cambio: ${toArray.join("")}`
      });
    }
  };

  // Sum Array

  sumArray3 = (req, res) => {
    const { array } = req.body;

    // Make sure the array is only numbers and is not empty

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return res
          .status(400)
          .json({ Mensaje: "El array solo debería de contener números" });
      }
    }

    if (array.length === 0) {
      return res.json({ Resultado: "0" });
    }

    // Declare different variables to store results

    let positiveNumbers = [];
    let evenNumbers = [];
    let oddNumbers = [];

    // Loop

    array.map(number => {
      if (number >= 0) {
        positiveNumbers.push(number);
      }
    });

    array.map(number => {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      } else {
        oddNumbers.push(number);
      }
    });

    const totalSum = array.reduce((total, item) => {
      return (total += item);
    }, 0);

    const totalPositiveIntegers = positiveNumbers.reduce((total, item) => {
      return (total += item);
    }, 0);

    const totalEven = evenNumbers.reduce((total, item) => {
      return (total += item);
    }, 0);

    const totalOdd = oddNumbers.reduce((total, item) => {
      return (total += item);
    }, 0);

    return res.json({
      Total: `${totalSum}`,
      EnterosPositivios: `${totalPositiveIntegers}`,
      NúmerosPares: `${totalEven}`,
      NúmerosImpares: `${totalOdd}`
    });
  };

  // Transform Array

  transformArray4 = (req, res) => {
    const { multiArray, order } = req.body;

    // Check that order is correct and multiArray only contains numbers/string

    if (order.toLowerCase() !== "desc" && order.toLowerCase() !== "asc") {
      return res
        .status(400)
        .json({ Mensaje: "Las opciones de orden son ASC o DESC" });
    }

    let noAlphaNumeric = [];

    for (let i = 0; i < multiArray.length; i++) {
      multiArray[i].map(data => {
        if (typeof data !== "number" && typeof data !== "string") {
          noAlphaNumeric.push(data);
        }
      });
    }

    if (noAlphaNumeric.length > 0) {
      return res.status(400).json({
        Mensaje:
          "El array solo puede contener elementos alfanúmericos (strings/numbers)"
      });
    }

    // Grab the numbers that are integers

    let newArray = [];

    for (let i = 0; i < multiArray.length; i++) {
      multiArray[i].map(data => {
        if (typeof data === "number") {
          if (Number.isInteger(data) !== false) {
            newArray.push(data);
          }
        }
      });
    }

    if (newArray.length === 0) {
      return res.json({ Resultado: "0 números enteros" });
    }

    // Return array in the asked order

    if (order.toLowerCase() === "desc") {
      return res.json({
        Resultado: `Array en orden descendiente  ${newArray.sort((a, b) => {
          return b - a;
        })}`
      });
    } else {
      return res.json({
        Resultado: `Array en orden ascendente  ${newArray.sort((a, b) => {
          return a - b;
        })}`
      });
    }
  };

  // My Cows

  myCows5 = (req, res) => {
    const { numberOfCows, data } = req.body;

    // Check number of cows, data is right and the number of litters per cow is between 0.0 and 11.9

    if (numberOfCows > 50 || numberOfCows < 3)
      return res.status(400).json({
        Mensaje: "El número de vacas debe de ser entre 3 y 50 máximo"
      });

    if (data.length !== 7)
      return res.status(400).json({
        Mensaje: "Has añadido o has restado un día al array"
      });

    for (let i = 0; i < data.length; i++) {
      if (data[i].length !== numberOfCows)
        return res.status(400).json({
          Mensaje:
            "El número de vacas no es el mismo al que has especificado, observa si has introducido bien la data"
        });
    }

    // Create the specific array 7xN

    let theArray = [{}, {}, {}, {}, {}, {}, {}];

    data.map((_, i) => {
      data[i].map((number, numberIndex) => {
        theArray[i] = { ...theArray[i], [`cow ${numberIndex + 1}`]: number };
      });
    });

    console.table(theArray); //     This is the tale 7xnumberOfCows

    // Return the specific data

    let maxAndMin = [];
    let filtering = [];
    let theDaysOfLessProduction = [];
    let theDaysOfBiggerProduction = [];

    for (let i = 0; i < data.length; i++) {
      const totalSum = data[i].reduce((total, item) => {
        return (total += item);
      }, 0);
      maxAndMin.push(totalSum);
      filtering.push({ día: i + 1, total: totalSum });
    }

    filtering.map(item => {
      // Days with the lowest production
      if (Math.min(...maxAndMin) === item.total) {
        theDaysOfLessProduction.push(item);
      }
      // Days with bigger production
      else if (Math.max(...maxAndMin) === item.total) {
        theDaysOfBiggerProduction.push(item);
      }
    });

    let eachCow = [];
    let eachCowMax = [];

    for (let i = 0; i < data.length; i++) {
      data[i].map((number, index) => {
        eachCow.push({ día: i + 1, vaca: index + 1, total: number });
      });
    }

    for (let i = 0; i < data.length; i++) {
      eachCow.map(item => {
        if (Math.max(...data[i]) === item.total && item.día === i + 1) {
          eachCowMax.push(item);
        }
      });
    }

    // Each day production

    const totalOfEachDay = partOfTheArray => {
      const totalSum = partOfTheArray.reduce((total, item) => {
        return (total += item);
      }, 0);
      return totalSum;
    };

    // Max production of cow per day

    return res.json({
      Día_1: `${totalOfEachDay(data[0])}`,
      Día_2: `${totalOfEachDay(data[1])}`,
      Día_3: `${totalOfEachDay(data[2])}`,
      Día_4: `${totalOfEachDay(data[3])}`,
      Día_5: `${totalOfEachDay(data[4])}`,
      Día_6: `${totalOfEachDay(data[5])}`,
      Día_7: `${totalOfEachDay(data[6])}`,

      "Día(s)_De_Menos_Producción": theDaysOfLessProduction,
      "Día(s)_De_Más_Producción": theDaysOfBiggerProduction,

      Producción_Máxima_De_Vaca_Por_Día: eachCowMax
    });
  };

  // Tracking Coordinadora

  trackingCoordinadora6 = async (req, res) => {
    const { codigo } = req.params;

    if (!codigo) {
      return res
        .status(400)
        .json({ Message: "No se ha enviadó ningun tipo de código" });
    }

    let typeOfCode = "";

    if (codigo.length === 11) {
      typeOfCode = "codigo_remision";
    } else if (codigo[0] === "7" && codigo.length === 15) {
      typeOfCode = "etiqueta1d";
    } else {
      return res
        .status(400)
        .json({ Message: "Has introducido mal el código/etiqueta" });
    }

    // Data

    const { data: guiasCodigos } = await axios
      .get("https://api.coordinadora.com/cm-model-testing/api/v1/talentos")
      .catch(err => {
        console.log(err);
      });

    const { data: etiquetas } = await axios
      .get(
        "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint"
      )
      .catch(err => {
        console.log(err);
      });

    // Codigo remisión

    if (typeOfCode === "codigo_remision") {
      const informacionCodigo = guiasCodigos.data.guias.find(element => {
        return element.codigo_remision === codigo;
      });

      const tiposDeEtiqueta = [];
      let tracking = [];
      const unidades = [];

      informacionCodigo.unidades.map(element => {
        tiposDeEtiqueta.push(element.etiqueta1d);
      });

      tiposDeEtiqueta.map(etiqueta => {
        etiquetas.data.map(element => {
          if (etiqueta === element.etiqueta1d) {
            tracking.push({
              checkpoint: element.checkpoint,
              tipo: element.tipo
            });
          }
        });
        unidades.push({
          etiqueta1d: etiqueta,
          cantidad_checkpoints: tracking.length,
          tracking: tracking
        });
        tracking = [];
      });

      const responseCodigo = {
        isError: false,
        status: "success",
        data: {
          codigo_remision: informacionCodigo.codigo_remision,
          nombre_destinatario: informacionCodigo.nombre_destinatario,
          dir_destinatario: informacionCodigo.dir_destinatario,
          unidades: unidades
        }
      };

      return res.json({ responseCodigo });
    } else {
      // Etiqueta1d

      let indexCodigoRemision = 0;

      guiasCodigos.data.guias.map((element, i) => {
        element.unidades.map(({ etiqueta1d }) => {
          if (etiqueta1d === codigo) {
            indexCodigoRemision = i;
          }
        });
      });

      const codigoData = guiasCodigos.data.guias[indexCodigoRemision];

      const tracking = etiquetas.data.filter(({ etiqueta1d }) => codigo === etiqueta1d);

      const responseEtiqueta = {
        isError: false,
        status: "success",
        data: {
          etiqueta: codigo,
          informacion_guia: {
            codigo_remision: codigoData.codigo_remision,
            nombre_destinatario: codigoData.nombre_destinatario,
            dir_destinatario: codigoData.dir_destinatario,
          },
          cantidad_checkpoints: tracking.length,
          tracking: tracking
        }
      };

      return res.json({responseEtiqueta})

    }
  };

  // Array Score

  arrayScore7 = (req, res) => {
    const { array } = req.body;

    // Make sure the array only contain numbers

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return res
          .status(400)
          .json({ Mensaje: "Array solo debería contener números" });
      }
    }

    // Add numbers based on the rule

    let result = 0;

    array.map(number => {
      if (number % 2 === 0) {
        result += 1;
      } else if (number % 2 !== 0 && number !== 5) {
        result += 3;
      } else if (number === 5) {
        result += 5;
      }
    });

    return res.json({ Resultado: result });
  };
}
