import React, {useEffect, useState} from 'react';
import {
  Image,
  BookOpen,
  Star,
  MapPin,
  HelpCircle,
  Phone,
  Eye,
  X,
  Pencil,
  Trash2,
} from 'lucide-react';
import {
  BannerSettings,
  BannerSettingsData,
  ContactSettings,
  ContactSettingsData,
  CourseSettings,
  CourseSettingsData,
  FAQSettings,
  FAQSettingsData,
  FAQSettingsDatashow,
  LocationsSettings,
  LocationsSettingsData,
  TopperSettings,
  TopperSettingsData,
} from '../../ApiServices/ApiServices';
import UseNotification from '../../Utils/Notification/UseNotification';

/* ========================= MODAL ========================= */
const Modal = ({title, onClose, children}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">{children}</div>
      </div>
    </div>
  );
};

/* ========================= SETTINGS CARD ========================= */
const SettingsCard = ({title, icon, onView, children}) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {icon}
          {title}
        </div>
        <button onClick={onView} className="text-blue-600 hover:text-blue-800">
          <Eye />
        </button>
      </div>
      {children}
    </div>
  );
};

/* ========================= DATAGRID ========================= */
const DataGrid = ({columns, data, onEdit, onDelete}) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full border-collapse">
        <thead className="bg-blue-900 text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-semibold border-r last:border-r-0">
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-6 text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                {columns.map((col, colIndex) => {
                  const cellValue = row[col.accessor];

                  return (
                    <td key={colIndex} className="px-4 py-3 text-sm border-t">
                      {/* ✅ IMAGE COLUMN FIX */}
                      {col.type === 'image' ? (
                        row[col.accessor] ? (
                          <img
                            src={row[col.accessor]}
                            alt="banner"
                            className="w-14 h-14 rounded object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">
                            No Image
                          </span>
                        )
                      ) : (
                        row[col.accessor] || '-'
                      )}
                    </td>
                  );
                })}

                {/* ACTIONS */}
                <td className="px-4 py-3 border-t">
                  <div className="flex gap-3">
                    <button
                      onClick={() => onEdit(rowIndex)}
                      className="text-blue-600 hover:text-blue-800">
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(rowIndex)}
                      className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

/* ========================= MAIN COMPONENT ========================= */
const DashboardSettings = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  const [activeModal, setActiveModal] = useState(null);

  /* ---------- FORM STATES ---------- */
  const [banner, setBanner] = useState({title: '', subtitle: '', image: null});
  const [course, setCourse] = useState({
    title: '',
    desc: '',
    duration: '',
    image: null,
  });
  const [topper, setTopper] = useState({
    name: '',
    achievemnent: '',
    image: null,
  });
  const [location, setLocation] = useState({
    name: '',
    institute: '',
    address: '',
    landmark: '',
    mapLink: '',
  });
  const [faq, setFaq] = useState({question: '', answer: ''});
  const [contact, setContact] = useState({phone: '', email: '', address: ''});

  /* ---------- GRID DATA ---------- */
  const [bannersList, setBannersList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [toppersList, setToppersList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [faqsList, setFaqsList] = useState([]);
  const [contactsList, setContactsList] = useState([]);
  const notify = UseNotification();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeModal === 'banners') {
      fetchBanners();
    } else if (activeModal === 'courses') {
      fetchCourses();
    }else if (activeModal === 'toppers') {
      fetchToppers();
    }
    else if (activeModal === 'locations') {
      fetchLocations();
    }
    else if (activeModal === 'contact') {
      fetchContacts();
    }
     else if (activeModal === 'faqs') {
      FAQSettingsData();
    }

  }, [activeModal]);
  

  const fetchBanners = () => {
    setLoading(true);
  
    BannerSettingsData(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            const fullImageUrl = item.image
              ? `${API_BASE_URL}/${item.image}`
              : null;
  
            return {
              id: item.id,
              title: item.title,
              subtitle: item.subTitle,
              image: fullImageUrl,
            };
          });
  
          setBannersList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch banners");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch banners error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching banners"
        );
  
        setLoading(false);
      }
    );
  };

  const fetchCourses = () => {
    setLoading(true);
  
    CourseSettingsData(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            const fullImageUrl = item.image
              ? `${API_BASE_URL}/${item.image}`
              : null;
  
            return {
              id: item.id,
              title: item.title,
              desc: item.description,
              duration: item.duration,
              image: fullImageUrl,
            };
          });
  
          setCoursesList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch courses");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch courses error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching courses"
        );
  
        setLoading(false);
      }
    );
  };

  const fetchToppers = () => {
    setLoading(true);
  
    TopperSettingsData(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            const fullImageUrl = item.image
              ? `${API_BASE_URL}/${item.image}`
              : null;
  
            return {
              id: item.id,
              name: item.name,
              achievemnent: item.achievement,
              image: fullImageUrl,
            };
          });
  
          setToppersList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch toppers");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch toppers error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching toppers"
        );
  
        setLoading(false);
      }
    );
  };
  
  const fetchLocations = () => {
    setLoading(true);
  
    LocationsSettingsData(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            return {
              id: item.id,
              name: item.cityName,
              institute: item.instituteName,
              address: item.address,
              landmark: item.landmark,
              mapLink: item.mapLink,
            };
          });
  
          setLocationsList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch locations");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch locations error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching locations"
        );
  
        setLoading(false);
      }
    );
  };

 const fetchContacts = () => {
    setLoading(true);
  
    ContactSettingsData(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            return {
              // id: item.id,
              phone: item.phone,
              email: item.email,
              address: item.address,
            
            };
          });
  
          setContactsList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch locations");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch courses error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching courses"
        );
  
        setLoading(false);
      }
    );
  };

const FAQSettingsData = () => {
    setLoading(true);
  
    FAQSettingsDatashow(
      // ✅ SUCCESS CALLBACK
      res => {
        if (res.success) {
          const formattedData = res.data.map(item => {
            return {
              // id: item.id,
              question: item.question,
              answer: item.answer,
              
            };
          });
  
          setFaqsList(formattedData);
        } else {
          // ⚠️ API returned success = false
          notify.error(res.message || "Failed to fetch locations");
        }
  
        setLoading(false);
      },
  
      // ❌ ERROR CALLBACK (NETWORK / 4xx / 5xx)
      error => {
        console.error("Fetch courses error:", error);
  
        notify.error(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching courses"
        );
  
        setLoading(false);
      }
    );
  };
  /* ---------- SUBMIT ---------- */
  const submitBanner = () => {
    const formData = new FormData();

    formData.append('title', banner.title);
    formData.append('subTitle', banner.subtitle); // exact key
    formData.append('image', banner.image);

    BannerSettings(formData, handleSuccess, handleFailure);
  };

  const submitCourse = () => {
    const formData = new FormData();

    formData.append('title', course.title);
    formData.append('desc', course.desc);
    formData.append('duration', course.duration);
    formData.append('image', course.image);
    CourseSettings(formData, handleSuccess, handleFailure);
  };

  const submitTopper = () => {
    const formData = new FormData();

    formData.append('name', topper.name);
    formData.append('image', topper.image);
    formData.append('achievement', topper.achievemnent);
    TopperSettings(formData, handleSuccess, handleFailure);
  };

  const submitLocation = () => {
    LocationsSettings(
      {
        cityName: location.name,
        instituteName: location.institute,
        address: location.address,
        landmark: location.landmark,
        googleMapLink: location.mapLink,
      },
      handleSuccess,
      handleFailure,
    );
  };
  const submitFaq = () => {
    FAQSettings(
      {
        question: faq.question,
        answer: faq.answer,
      },
      handleSuccess,
      handleFailure,
    );
  };
  const submitContact = () => {
    ContactSettings(
      {
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
      },
      handleSuccess,
      handleFailure,
    );
  };

  const handleSuccess = dataObject => {
    notify.success(dataObject.message);
    setBanner({title: '', subtitle: '', image: null});
  };

  const handleFailure = () => {};
  /* ---------- DELETE ---------- */
  const deleteItem = (setter, list, index) =>
    setter(list.filter((_, i) => i !== index));

  return (
    <>
      {/* ================= SETTINGS CARDS ================= */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <SettingsCard
            title="Banners"
            icon={<Image />}
            onView={() => setActiveModal('banners')}>
            <input
              className="input"
              placeholder="Banner Title"
              value={banner.title}
              onChange={e => setBanner({...banner, title: e.target.value})}
            />
            <input
              className="input"
              value={banner.subtitle}
              placeholder="Banner Subtitle"
              onChange={e => setBanner({...banner, subtitle: e.target.value})}
            />
            <input
              type="file"
              className="input"
              onChange={e => setBanner({...banner, image: e.target.files[0]})}
            />
            <button className="btn" onClick={submitBanner}>
              Save Banner
            </button>
          </SettingsCard>

          <SettingsCard
            title="Courses"
            icon={<BookOpen />}
            onView={() => setActiveModal('courses')}>
            <input
              className="input"
              value={course.title}
              placeholder="Course Title"
              onChange={e => setCourse({...course, title: e.target.value})}
            />
            <input
              className="input"
              value={course.desc}
              placeholder="Description"
              onChange={e => setCourse({...course, desc: e.target.value})}
            />
            <input
              className="input"
              placeholder="Duration"
              value={course.duration}
              onChange={e => setCourse({...course, duration: e.target.value})}
            />
            <input
              type="file"
              className="input"
              onChange={e => setCourse({...course, image: e.target.files[0]})}
            />
            <button className="btn" onClick={submitCourse}>
              Save Course
            </button>
          </SettingsCard>

          <SettingsCard
            title="Toppers"
            icon={<Star />}
            onView={() => setActiveModal('toppers')}>
            <input
              className="input"
              value={topper.name}
              placeholder="Topper Name"
              onChange={e => setTopper({...topper, name: e.target.value})}
            />
            <input
              className="input"
              value={topper.achievemnent}
              placeholder="Achievement"
              onChange={e =>
                setTopper({...topper, achievemnent: e.target.value})
              }
            />
            <input
              type="file"
              className="input"
              onChange={e => setTopper({...topper, image: e.target.files[0]})}
            />
            <button className="btn" onClick={submitTopper}>
              Save Topper
            </button>
          </SettingsCard>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <SettingsCard
            title="Locations"
            icon={<MapPin />}
            onView={() => setActiveModal('locations')}>
            <input
              className="input"
              placeholder="City Name"
              value={location.name}
              onChange={e => setLocation({...location, name: e.target.value})}
            />
            <input
              className="input"
              value={location.institute}
              placeholder="Institute Name"
              onChange={e =>
                setLocation({...location, institute: e.target.value})
              }
            />
            <input
              className="input"
              value={location.address}
              placeholder="Address"
              onChange={e =>
                setLocation({...location, address: e.target.value})
              }
            />
            <input
              className="input"
              value={location.landmark}
              placeholder="Landmark"
              onChange={e =>
                setLocation({...location, landmark: e.target.value})
              }
            />
            <input
              className="input"
              value={location.mapLink}
              placeholder="Google Map Link"
              onChange={e =>
                setLocation({...location, mapLink: e.target.value})
              }
            />
            <button className="btn" onClick={submitLocation}>
              Save Location
            </button>
          </SettingsCard>

          <SettingsCard
            title="FAQs"
            icon={<HelpCircle />}
            onView={() => setActiveModal('faqs')}>
            <input
              className="input"
              placeholder="Question"
              value={faq.question}
              onChange={e => setFaq({...faq, question: e.target.value})}
            />
            <textarea
              className="input"
              placeholder="Answer"
              value={faq.answer}
              onChange={e => setFaq({...faq, answer: e.target.value})}
            />
            <button className="btn" onClick={submitFaq}>
              Save FAQ
            </button>
          </SettingsCard>

          <SettingsCard
            title="Contact Info"
            icon={<Phone />}
            onView={() => setActiveModal('contact')}>
            <input
              className="input"
              value={contact.phone}
              placeholder="Phone"
              onChange={e => setContact({...contact, phone: e.target.value})}
            />
            <input
              className="input"
              value={contact.email}
              placeholder="Email"
              onChange={e => setContact({...contact, email: e.target.value})}
            />
            <textarea
              className="input"
              value={contact.address}
              placeholder="Address"
              onChange={e => setContact({...contact, address: e.target.value})}
            />
            <button className="btn" onClick={submitContact}>
              Save Contact
            </button>
          </SettingsCard>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      {activeModal === 'banners' && (
        <Modal title="Banners" onClose={() => setActiveModal(null)}>
          {loading ? (
            <p>Loading banners...</p>
          ) : (
            <DataGrid
              columns={[
                {header: 'Title', accessor: 'title'},
                {header: 'Subtitle', accessor: 'subtitle'},
                {header: 'Image', accessor: 'image', type: 'image'},
              ]}
              data={bannersList}
              onEdit={i => console.log('Edit Banner', i)}
              onDelete={i => deleteItem(setBannersList, bannersList, i)}
            />
          )}
        </Modal>
      )}

      {activeModal === 'courses' && (
        <Modal title="Courses" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              {header: 'Title', accessor: 'title'},
              {header: 'Description', accessor: 'desc'},
              {header: 'Duration', accessor: 'duration'},
              {header: 'Image', accessor: 'image', type: 'image'},
            ]}
            data={coursesList}
            onEdit={i => console.log('Edit Course', i)}
            onDelete={i => deleteItem(setCoursesList, coursesList, i)}
          />
        </Modal>
      )}

      {activeModal === 'toppers' && (
        <Modal title="Toppers" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              {header: 'Name', accessor: 'name'},
              {header: 'Image', accessor: 'image', type: 'image'},
              {header: 'Achievement', accessor: 'achievemnent'},
            ]}
            data={toppersList}
            onEdit={i => console.log('Edit Topper', i)}
            onDelete={i => deleteItem(setToppersList, toppersList, i)}
          />
        </Modal>
      )}

      {activeModal === 'locations' && (
        <Modal title="Locations" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              {header: 'City', accessor: 'name'},
              {header: 'Institute', accessor: 'institute'},
              {header: 'Address', accessor: 'address'},
              {header: 'Landmark', accessor: 'landmark'},
              {header: 'Map Link', accessor: 'mapLink'},
            ]}
            data={locationsList}
            onEdit={i => console.log('Edit Location', i)}
            onDelete={i => deleteItem(setLocationsList, locationsList, i)}
          />
        </Modal>
      )}

      {activeModal === 'faqs' && (
        <Modal title="FAQs" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              {header: 'Question', accessor: 'question'},
              {header: 'Answer', accessor: 'answer'},
            ]}
            data={faqsList}
            onEdit={i => console.log('Edit FAQ', i)}
            onDelete={i => deleteItem(setFaqsList, faqsList, i)}
          />
        </Modal>
      )}

      {activeModal === 'contact' && (
        <Modal title="Contact Info" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              {header: 'Phone', accessor: 'phone'},
              {header: 'Email', accessor: 'email'},
              {header: 'Address', accessor: 'address'},
            ]}
            data={contactsList}
            onEdit={i => console.log('Edit Contact', i)}
            onDelete={i => deleteItem(setContactsList, contactsList, i)}
          />
        </Modal>
      )}

      {/* ================= COMMON STYLES ================= */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 10px;
          border-radius: 8px;
        }
        .btn {
          background: #2563eb;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default DashboardSettings;
