import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./CoursePurchase.css";
import NavbarTop from "../Navbar/NavbarTop";
import Footer from "../Footer/Footer";
import { UserContext } from "../../../UserContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// import
function CoursePurchase() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const [fullDate, setFullDate] = useState();
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [showSuccesModal, setShowSuccessModal] = useState(false);
  const initialFormData = {
    sId: null,
    email: "",
    fName: "",
    dob: "",
    no: "",
    iName: "",
    city: "",
    state: "",
    edu: "",
    currDate: "",
    cStartDate: "",
    cEndDate: "",
    cName: "",
    cDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e, data) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage("");
  };

  const { course } = useContext(UserContext);
  useEffect(() => {
    setFormData({ ...formData, cName: course.toLowerCase() });
    var selectElement = document.getElementsByName("cName")[0];
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === course.toLowerCase()) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  }, [course]);

  useEffect(() => {
    if (selectedDate) {
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const year = String(selectedDate.getFullYear()).slice(-2);
      setFormData({ ...formData, dob: `${day}/${month}/${year}` });
    }
  }, [selectedDate]);

  const formatCStartDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.toLocaleString("default", {
      month: "short",
    })}/${date.getFullYear()}`;
  };

  // Function to format the end date
  const formatCEndDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.toLocaleString("default", {
      month: "short",
    })}/${date.getFullYear()}`;
  };

  const handleChangeCourseDate = (event) => {
    setMessage("");
    const selectedValue = event.target.value;
    const [cStartDate, cEndDate] = selectedValue.split(" - ");
    setFormData((prevFormData) => ({
      ...prevFormData,
      cStartDate,
      cEndDate,
      cDate: `${formatCStartDate(cStartDate)} - ${formatCEndDate(cEndDate)}`, // Include cDate update here
    }));
    setMessage("");
  };

  const [batches, setBatches] = useState([]);
  const createCourse = async (date) => {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    let day = String(date.getDate()).padStart(2, "0");
    let batch1StartDate,
      batch1EndDate,
      batch2StartDate,
      batch2EndDate,
      batch3StartDate,
      batch3EndDate;
    if (day > 14) {
      date.setDate(1);
      let tempDate = date;

      batch1StartDate = new Date(tempDate);
      batch1StartDate.setMonth(batch1StartDate.getMonth() + 1);
      batch1EndDate = new Date(batch1StartDate);
      batch1EndDate.setDate(batch1EndDate.getDate() + 44);

      batch2StartDate = new Date(tempDate);
      batch2StartDate.setMonth(batch2StartDate.getMonth() + 1);
      batch2StartDate.setDate(15);
      batch2EndDate = new Date(batch2StartDate);
      batch2EndDate.setDate(batch2EndDate.getDate() + 44);

      batch3StartDate = new Date(tempDate);
      batch3StartDate.setMonth(batch3StartDate.getMonth() + 2);
      batch3EndDate = new Date(batch3StartDate);
      batch3EndDate.setDate(batch3EndDate.getDate() + 44);
    } else {
      date.setDate(15);
      let tempDate = date;

      batch1StartDate = new Date(tempDate);
      batch1EndDate = new Date(batch1StartDate);
      batch1EndDate.setDate(batch1EndDate.getDate() + 44);

      batch2StartDate = new Date(tempDate);
      batch2StartDate.setMonth(batch2StartDate.getMonth() + 1);
      batch2StartDate.setDate(1);
      batch2EndDate = new Date(batch2StartDate);
      batch2EndDate.setDate(batch2EndDate.getDate() + 44);

      batch3StartDate = new Date(tempDate);
      batch3StartDate.setMonth(batch3StartDate.getMonth() + 1);
      batch3EndDate = new Date(batch3StartDate);
      batch3EndDate.setDate(batch3EndDate.getDate() + 44);
    }

    let batches = await [
      {
        sDate: batch1StartDate,
        endDate: batch1EndDate,
      },
      {
        sDate: batch2StartDate,
        endDate: batch2EndDate,
      },
      {
        sDate: batch3StartDate,
        endDate: batch3EndDate,
      },
    ];
    setBatches(batches);
  };

  const dateFromBack = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_CURRENT_DATE);
      const date = new Date(response.data.date);
      console.log(date);
      createCourse(date);
      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let year = String(date.getFullYear()).slice(-2);
      let formattedDate = `${day}/${month}/${year}`;
      setFormData({ ...formData, currDate: formattedDate });
      setFullDate(date);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dateFromBack();
  }, []);

  const generateId = async () => {
    // For cStartDate
    const startDate = new Date(formData.cStartDate);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0, 0, 0, 0);
    const cStartDate = startDate.toISOString();

    // For cEndDate
    const endDate = new Date(formData.cEndDate);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(0, 0, 0, 0);
    const cEndDate = endDate.toISOString();

    const userData = {
      email: formData.email.toLowerCase().trim(),
      fName: formData.fName.toLowerCase().trim(),
      dob: formData.dob,
      no: formData.no.toLowerCase().trim(),
      iName: formData.iName.toLowerCase().trim(),
      city: formData.city.toLowerCase().trim(),
      state: formData.state.toLowerCase().trim(),
      edu: formData.edu.toLowerCase().trim(),
      cName: formData.cName.toLowerCase().trim(),
      cStartDate: cStartDate,
      cEndDate: cEndDate,
    };

    try {
      const response = await axios.post(process.env.REACT_APP_GENERATE_ID, {
        userData: userData,
      });
      if (response.status === 200) {
        const sId = response.data.sId;
        setSaveData(true);
        return {
          sId: response.data.sId,
          mess: response.data.message,
          status: true,
        };
      } else if (response.status === 201) {
        setFormData({ ...formData, sId: response.data.sId });
        return {
          mess: response.data.message,
          status: false,
        };
      } else {
        return {
          mess: response.data.message,
          status: false,
        };
      }
    } catch (error) {
      console.log(error);
    }
    return {
      mess: "something went wrong",
      status: false,
    };
  };

  const verifyDOB = (date) => {
    setMessage("");
    if (!date || isNaN(date.getTime())) {
      return { status: false, mess: "Please select a valid date of birth." };
    }
    const currentDate = new Date();
    const minAgeDate = new Date(
      currentDate.getFullYear() - 16,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    if (date > minAgeDate) {
      return { status: false, mess: "You must be at least 16 years old." };
    }
    return { status: true, mess: "" };
  };

  function isTenDigitNumber(str) {
    const digitRegex = /^\d{10}$/;
    if (digitRegex.test(str)) {
      return { status: true };
    } else {
      return { status: false, mess: "Enter a valid ten-digit number" };
    }
  }

  const register = async (event) => {
    console.log("step 1");
    setProcessing(true);
    event.preventDefault();
    const verifyDob = verifyDOB(selectedDate);
    const checkNo = isTenDigitNumber(formData.no);
    if (verifyDob.status === false) {
      setMessage(verifyDob.mess);
      handleSuccessOpenModal();
    } else if (checkNo.status === false) {
      setMessage(checkNo.mess);
      handleSuccessOpenModal();
    } else {
      console.log("step 2");
      const generatedIdResponse = await generateId();
      if (generatedIdResponse.status) {
      console.log("step3");
      const userData = {
        sId: "",
        email: formData.email.toLowerCase().trim(),
        fName: formData.fName.toLowerCase().trim(),
        dob: formData.dob,
        no: formData.no.toLowerCase().trim(),
        iName: formData.iName.toLowerCase().trim(),
        city: formData.city.toLowerCase().trim(),
        state: formData.state.toLowerCase().trim(),
        edu: formData.edu.toLowerCase().trim(),
        cName: formData.cName.toLowerCase().trim(),
        cDate: formData.cDate.toLowerCase().trim(),
        currDate: fullDate,
      };

      try {
        const response = await axios.post(
          process.env.REACT_APP_REGISTERED_STU,
          {
            email: userData.email,
            fName: userData.fName,
          }
        );
        setMessage(response.data.message);
        handleSuccessOpenModal();
        if (response.status === 200) {
          setSaveData(true);
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
      } else {
      setMessage(generatedIdResponse.mess);
      handleSuccessOpenModal();
      }
    }
    setProcessing(false);
  };

  const handleSuccessOpenModal = () => {
    setShowSuccessModal(true);
  };

  const handleSuccessCloseModal = () => {
    setShowSuccessModal(false);
    if (saveData) {
      setFormData({
        ...formData,
        sId: null,
        email: "",
        fName: "",
        dob: "",
        no: "",
        iName: "",
        city: "",
        state: "",
        edu: "",
        currDate: "",
        cName: "",
        cDate: "",
      });
      setSelectedDate(null);
      setFullDate("");
      setMessage("");
      setProcessing(false);
      setShowSuccessModal(false);
      // setBatches([]);
      setSaveData(false);
    }
  };

  const endYear = new Date().getFullYear() - 30;

  useEffect(() => {
    setMessage("");
  }, [selectedDate]);

  return (
    <div className="signUpTop">
      <div
        className="processingSectionPurchase"
        style={{ display: processing ? "" : "none" }}
      >
        <div className="spinner-border " role="status" />
      </div>
      <NavbarTop />
      <div
        className="SignUpHead "
        style={{ opacity: processing ? "0.7" : "1" }}
      >
        <div className="SignUp container">
          <div className="crossBtnHead">
            <div className="sec1">
              <h3>Steps Towards Your Career</h3>
            </div>
          </div>
          <div className="item-container-signup ">
            <p
              className="message"
              style={{
                display: message ? "" : "none",
                color: saveData ? "green" : "red",
              }}
            >
              {message}
            </p>
            <form onSubmit={register}>
              <div className="item labelSection">
                <label>Full Name</label>
                <label>Email</label>
                <label>D.O.B</label>
                <label>Contact No.</label>
                <label>Institution/School Name</label>
                <label>City</label>
                <label>State</label>
                <label>Education </label>
                <label>Course Select</label>
                <label>Course Date</label>
              </div>
              <div>
                <div className="item inputSection">
                  <input
                    type="text"
                    name="fName"
                    required
                    placeholder="Name"
                    value={formData.fName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <DatePicker
                    id="dob"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    onClickOutside={(e) => e.preventDefault()}
                    className="custom-datepicker"
                    placeholderText="dd/mm/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={100} // Set a large enough number to display all years
                    minDate={new Date(endYear, 0, 1)} // Set the minDate to limit the years range
                    maxDate={new Date()} // Set the maxDate to the current date
                    dateFormat="dd/MM/yyyy"
                  />
                  <input
                    type="text"
                    name="no"
                    required
                    placeholder="Enter Your Contact Info"
                    value={formData.no}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="iName"
                    required
                    className="inputInsti"
                    placeholder="Enter Your Institution Name"
                    value={formData.iName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Jaipur"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="Rajasthan"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <select
                    name="edu"
                    className="eduSelect"
                    required
                    value={formData.edu}
                    onChange={handleChange}
                  >
                    <option value="">Select--</option>
                    <option value="matric">Matric</option>
                    <option value="high school">High School</option>
                    <option value="graduate">Under Graduate</option>
                    <option value="high">Post Graduate</option>
                  </select>
                  <select
                    name="cName"
                    value={formData.cName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select--</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="Python Developer">Python Developer</option>
                    <option value="Java Developer">Java Developer</option>
                    <option value="Php Developer">PHP Developer</option>
                  </select>
                  <select
                    name="cDate"
                    required
                    onChange={handleChangeCourseDate}
                  >
                    <option value="">Select--</option>
                    {batches.map((batch, index) => (
                      <option
                        key={index}
                        value={`${batch.sDate} - ${batch.endDate}`}
                      >
                        {`${formatCStartDate(batch.sDate)} - ${formatCEndDate(
                          batch.endDate
                        )}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="submitBtnHead">
                <button className="signUpBtn" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {/* <button onClick={handleSuccessOpenModal}>click me modal</button> */}
      <div>
        <Modal
          show={showSuccesModal}
          onHide={handleSuccessCloseModal}
          className="d-flex justify-content-center align-items-center modal "
        >
          <Modal.Body>
            <div>
              <div className="modalCloseSuccesHead">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faTimes}
                  onClick={handleSuccessCloseModal}
                />
              </div>
              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  color: saveData ? "green" : "red",
                }}
              >
                {message}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default CoursePurchase;
