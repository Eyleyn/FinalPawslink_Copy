import { useEffect } from "react";
  import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
  } from "react-router-dom";

import LogInScreen from "./pages/LogIn";
import EditAnimal from "./pages/EditAnimal";
import DogDatabaseScreen from "./pages/DogDatabase";
import CatDatabaseScreen from "./pages/CatDatabase";
import DashboardScreen from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import AdoptionRequests from "./pages/AdoptionRequests";
import AnimalAdoptionDetailsExpa from "./pages/AnimalAdoptionDetailsExpa";
import EventScreen from "./pages/Event";
import ViewRequest from "./pages/ViewRequest";
import ViewFormApprovalForm from "./pages/ViewFormApprovalForm";
import AnimalAdoptionDetails from "./pages/AnimalAdoptionDetails";
import SeeForms from "./pages/SeeForms";
import SeeFormsAdoptionForm from "./pages/SeeFormsAdoptionForms";
import EditEvent from "./pages/EditEvent";
import DeclinedRequests from "./pages/DeclinedRequests";
import ApprovedRequests from "./pages/ApprovedRequests";
import AdoptedDogs from "./pages/AdoptedDogs";
import AdoptedCats from "./pages/AdoptedCats";
import AdoptedAnimals from "./pages/AdoptedAnimals";
import AddAnAnimal from "./pages/AddAnimal";
import EditPassword from "./pages/EditPassword";
import MessagesScreen from "./pages/Message";
import ForumScreen from "./pages/Forum";
import UserDatabaseScreen from "./pages/UserList";
import ViewForumScreen from "./pages/ViewForum";
import LogDatabaseScreen from "./pages/AdminLog";
import DownloadQR from "./pages/QRCodeDog";
import UserViewRequest from "./pages/UserRequest";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogInScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/dogs" element={<DogDatabaseScreen/> } />
      <Route path="/cats" element={<CatDatabaseScreen/> } />
      <Route path="/edit-animal" element={<EditAnimal />} />
      <Route path="/add-event" element={<AddEvent />} />
      <Route path="add-animal" element={<AddAnAnimal />} />
      <Route path="/edit-event" element={<EditEvent />} />
      <Route path="/user-message" element={<MessagesScreen />} />
      <Route path="/forum" element={<ForumScreen />} />
      <Route path="/view-forum" element={<ViewForumScreen />} />
      <Route path="/user-list" element={<UserDatabaseScreen />} />
      <Route path="/admin-log" element={<LogDatabaseScreen />} />
      <Route path="/view-user-request" element={<UserViewRequest />} />

      <Route
        path="/animal-adoptation"
        element={<AnimalAdoptionDetailsExpa />}
      />
      <Route
        path="/see-forms-adoption-form"
        element={<SeeFormsAdoptionForm />}
      />
      <Route path="/see-forms" element={<SeeForms />} />
      <Route path="/view-event" element={<EventScreen />} />
      <Route path="/adopted-animals" element={<AdoptedAnimals />} />
      <Route path="/adopted-dogs" element={<AdoptedDogs />} />
      <Route path="/adopted-cats" element={<AdoptedCats />} />
      <Route path="/adoption-requests" element={<AdoptionRequests />} />
      <Route path="/approved-request" element={<ApprovedRequests />} />
      <Route path="/declined-request" element={<DeclinedRequests />} />
      <Route path="/view-request/:id" element={<ViewRequest />} />
      <Route path="/see-adoption-form" element={<SeeFormsAdoptionForm />} />
      <Route path="/view-form-approval" element={<ViewFormApprovalForm />} />
      <Route path="/animal-adoption-details" element={<AnimalAdoptionDetails />} />
      <Route path="/edit-password" element={<EditPassword />} />
      <Route path="/qr-code-download" element={<DownloadQR />}/>

    </Routes>
  );
}
export default App;
