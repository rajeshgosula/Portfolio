import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'; 
import "./App.css"
import "./Home.css"

const About = () => {
    const [about, setAbout] = useState("");
    const proxy = process.env.REACT_APP_PROXY;

    useEffect(() => {
        axios.get(`${proxy}/app/About`)
            .then((response) => {
                const aboutData = response.data;
                if (aboutData.length > 0) {
                    setAbout(aboutData[0].About);
                }
            })
            .catch((err) => {
                console.error("Error fetching about data:", err);
            });
    }, []);

    return (
             
        <div className ="about-container">
            
            <div className='AboutInfo'>
  
            <h1> Hello, I'm Rajesh Gosula <hr style={{ borderTop: '1px solid white', width: '100%'}} />  </h1>
            <p>{about}</p>
            </div>

        </div>
    );
};

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const proxy = process.env.REACT_APP_PROXY;

    useEffect(() => {
        axios.get(`${proxy}/app/Skills`)
            .then((response) => {
                const skillsData = response.data;
                setSkills(skillsData);
            })
            .catch((err) => {
                console.error("Error fetching skills data:", err);
            });
    }, []);

    return (
        <div className="skills-container">
            <h2 className="container-header">Skills <hr style={{width:'20%'}}/></h2>

                {skills.map((skill, index) => (
                    <div className="skills-item" key={index}>
                        <h3>{skill.Role}</h3>
                        <hr style={{ borderTop: '1px solid rgb(5, 5, 54)' }} />
                        <p>{skill.Skills}</p>
                    </div>
                ))}
        </div>
    );
    
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const proxy = process.env.REACT_APP_PROXY;
    console.log('Proxy URL:', process.env.REACT_APP_PROXY);

    useEffect(() => {
        axios.get(`${proxy}/app/Projects`)
            .then((response) => {
                const projectsData = response.data;
                setProjects(projectsData);
            })
            .catch((err) => {
                console.error("Error fetching projects data:", err);
            });
    }, []);

    return (
        <div className="projects-container">
  <h2>Projects</h2>
  <hr style={{ borderTop: '1px solid rgb(5, 5, 54)' }} />
  <div className="grid-container">
    {projects.map((project, index) => (
      <div className="project-item" key={index}>
          <div className="round-circle">
            <div className="client-year-text">
              <p>{project.Client}</p>
              <p>{project.Date}</p>
            
          </div>
        </div>
        <div className="project-description">
        <div>

          <p>{project.Description}</p>      
</div>
          <button className='webButton'>View Website</button>
          </div>
      </div>
    ))}
  </div>
</div>
    )
}


const Contact = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        comments: Yup.string().required('Comments are required')
    });
    const proxy = process.env.REACT_APP_PROXY;

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comments: ''
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(`${proxy}/app/submitContactForm`, values);
            console.log('Form submitted successfully:', response.data);
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    useEffect(() => {
        console.log(`ProxyURL: ${process.env.REACT_APP_PROXY}`);
        // Existing axios call...
    }, []);
    return (
        <div className="Contact-Container">
            <div className="column">
                <div className="ContactDetails">
                    <h3>Contact</h3>
                    <hr />
                    <div className="div-7">
                        Email: Rajeshgosula1@gmail.com
                        <br />
                        Ph: +919966239382
                    </div>
                </div>
            </div>
            <div className="column-2">
                <div className="Form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        validateOnChange={true}
                        validateOnBlur={true} 
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <h2>Let's Talk<hr /></h2>
                                <div className="InlineInputs">
                                    <Field type="text" name="firstName" placeholder="First Name" />
                                    {touched.firstName && errors.firstName ? (
                                        <div className="error">{errors.firstName}</div>
                                    ) : null}
                                    <Field type="text" name="lastName" placeholder="Last Name" />
                                    {touched.lastName && errors.lastName ? (
                                        <div className="error">{errors.lastName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Field type="email" name="email" placeholder="Email" />
                                    {touched.email && errors.email ? (
                                        <div className="error">{errors.email}</div>
                                    ) : null}
                                    <Field type="text" name="phoneNumber" placeholder="Phone Number" />
                                    {touched.phoneNumber && errors.phoneNumber ? (
                                        <div className="error">{errors.phoneNumber}</div>
                                    ) : null}
                                    <Field as="textarea" name="comments" placeholder="Comments" />
                                    {touched.comments && errors.comments ? (
                                        <div className="error">{errors.comments}</div>
                                    ) : null}
                                </div>
                                <div className="Sub-button">
                                    <button type="submit">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};



export { About, Projects, Skills, Contact };