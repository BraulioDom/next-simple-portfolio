import Layout from '../components/Layout';
import { skills, experiences, projects } from '../profile';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/person.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8">
                                <h1>Braulio Dom</h1>
                                <h3>Fullstack dev</h3>
                                <p>Hello world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="row">
                <div className="col-md-4 py-2">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {
                                skills.map(({ skill, porcentage }, i) =>
                                (<div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${porcentage}%` }}
                                        >
                                        </div>
                                    </div>
                                </div>)
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8 py-2">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>

                            {
                                experiences.map((experience, i) =>
                                (<li key={i}>
                                    {experience.title}
                                    <h5>{experience.from} - {experience.to || 'current'}</h5>
                                    <p>{experience.description}</p>
                                </li>)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                            {
                                projects.map((project, i) =>
                                (<div className="col-md-4 p-2" key={i}>
                                    <div className="card">
                                        <div className="overflow">
                                            <img src="/portfolio/proyect.jpg" alt="" className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{project.name}</h3>
                                            <p>{project.content}</p>
                                        </div>
                                    </div>
                                </div>)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index;