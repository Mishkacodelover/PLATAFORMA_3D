import FiscalDataView from "./FiscalDataView";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const obj = {
  companyName: "",
  vatNumber: "",
  fiscalAdress: "",
  suscription: "",
};

export default function FiscalData() {
  const [fiscalData, setFiscalData] = useState(null);
  const [companyName, setCompanyName] = useState(false);
  const [vatNumber, setVatNumber] = useState(false);
  const [suscription, setSuscription] = useState(false);
  const [fiscalAdress, setFiscalAdress] = useState(false);
  const [inputData, setInputData] = useState(obj);
  const { authorization } = useAuthContext();

  function handleInputData(event) {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  }

  function handleCompanyName() {
    if (companyName === true) {
      setCompanyName(false);
    } else if (companyName === false) {
      setCompanyName(true);
    }
  }

  function handleVatNumber() {
    if (vatNumber === true) {
      setVatNumber(false);
    } else if (vatNumber === false) {
      setVatNumber(true);
    }
  }

  function handleFiscalAdress() {
    if (fiscalAdress === true) {
      setFiscalAdress(false);
    } else if (fiscalAdress === false) {
      setFiscalAdress(true);
    }
  }

  function handleSuscription() {
    if (suscription === true) {
      setSuscription(false);
    } else if (suscription === false) {
      setSuscription(true);
    }
  }

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8000/fiscalData/suscription/${authorization.id}`
      );
      const data = await response.json();
      setFiscalData(data);
    }
    fetchData();
  }, []);

  async function addFiscalData(event, inputData) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/fiscalData/${authorization.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );
    try {
      if (response.ok) {
        setInputData(obj);

        const fiscData = await response.json();
        if (fiscData) {
          setFiscalData(fiscData);
        }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateFiscalData(event, inputData) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/fiscalData/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );
    try {
      if (response.ok) {
        setInputData(obj);
        if (inputData.companyName) {
          setCompanyName(false);
        } else if (inputData.vatNumber) {
          setVatNumber(false);
        } else if (inputData.fiscalAdress) {
          setFiscalAdress(false);
        }

        const fiscData = await response.json();
        if (fiscData) {
          setFiscalData(fiscData);
        }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FiscalDataView
      fiscalData={fiscalData}
      companyName={companyName}
      setCompanyName={setCompanyName}
      inputData={inputData}
      setInputData={setInputData}
      updateFiscalData={updateFiscalData}
      vatNumber={vatNumber}
      fiscalAdress={fiscalAdress}
      handleInputData={handleInputData}
      addFiscalData={addFiscalData}
      suscription={suscription}
      handleCompanyName={handleCompanyName}
      handleVatNumber={handleVatNumber}
      handleFiscalAdress={handleFiscalAdress}
      handleSuscription={handleSuscription}
    />
  );
}
