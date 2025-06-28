
import './about.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-wrapper'>
                {/* Hero Section */}
                <div className='about-hero'>
                    <h1 className='about-title'>About Kenya's 2022 General Elections</h1>
                    <div className='title-underline'></div>
                    <p className='about-subtitle'>
                        A historic democratic milestone that shaped Kenya's political landscape
                    </p>
                </div>

                {/* Main Content */}
                <div className='about-content'>
                    {/* Election Overview */}
                    <section className='content-section'>
                        <div className='section-header'>
                            <div className='section-icon'>🗳️</div>
                            <h2>Election Overview</h2>
                        </div>
                        <div className='section-content'>
                            <div className='timeline-card'>
                                <div className='timeline-item'>
                                    <div className='timeline-date'>August 9, 2022</div>
                                    <div className='timeline-content'>
                                        <h4>Election Day</h4>
                                        <p>Millions of Kenyans cast their votes across the country in what was described as one of the most peaceful elections in Kenya's history.</p>
                                    </div>
                                </div>
                                <div className='timeline-item'>
                                    <div className='timeline-date'>August 15, 2022</div>
                                    <div className='timeline-content'>
                                        <h4>Results Announced</h4>
                                        <p>The Independent Electoral and Boundaries Commission (IEBC) announced the official results after a week-long tallying process.</p>
                                    </div>
                                </div>
                                <div className='timeline-item'>
                                    <div className='timeline-date'>September 5, 2022</div>
                                    <div className='timeline-content'>
                                        <h4>Supreme Court Ruling</h4>
                                        <p>The Supreme Court of Kenya upheld the presidential election results, dismissing all petitions challenging the outcome.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Historical Context */}
                    <section className='content-section'>
                        <div className='section-header'>
                            <div className='section-icon'>📚</div>
                            <h2>Historical Context</h2>
                        </div>
                        <div className='section-content'>
                            <div className='info-cards'>
                                <div className='info-card'>
                                    <h4>Unique Record</h4>
                                    <p>The 2022 general election saw the lowest number of presidential candidates cleared since the multi-party system was implemented in 1992, demonstrating the maturation of Kenya's democratic processes.</p>
                                </div>
                                <div className='info-card'>
                                    <h4>Parliamentary Legacy</h4>
                                    <p>All parliamentarians elected in 2022 now sit in the 13th Parliament of Kenya, continuing the country's legislative tradition established since independence.</p>
                                </div>
                                <div className='info-card'>
                                    <h4>Democratic Cycle</h4>
                                    <p>Kenya holds general elections every five years, maintaining a consistent democratic rhythm that has strengthened institutions and voter participation over time.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Elective Positions */}
                    <section className='content-section'>
                        <div className='section-header'>
                            <div className='section-icon'>🏛️</div>
                            <h2>Elective Positions in Kenya</h2>
                        </div>
                        <div className='section-content'>
                            <p className='positions-intro'>
                                Kenya's devolved system of government provides multiple levels of representation, 
                                ensuring that citizens have voices at both national and county levels.
                            </p>
                            <div className='positions-grid'>
                                <div className='position-card'>
                                    <div className='position-icon'>🇰🇪</div>
                                    <h4>President</h4>
                                    <p>Head of State and Government, elected for a five-year term with a maximum of two terms.</p>
                                </div>
                                <div className='position-card'>
                                    <div className='position-icon'>🏢</div>
                                    <h4>County Governor</h4>
                                    <p>Chief executive of county government, responsible for devolved functions and local development.</p>
                                </div>
                                <div className='position-card'>
                                    <div className='position-icon'>🏛️</div>
                                    <h4>Member of Parliament</h4>
                                    <p>Representatives in the National Assembly, elected from 290 constituencies across Kenya.</p>
                                </div>
                                <div className='position-card'>
                                    <div className='position-icon'>🏘️</div>
                                    <h4>Member of County Assembly</h4>
                                    <p>Local representatives who make laws and oversee county government operations at the ward level.</p>
                                </div>
                                <div className='position-card'>
                                    <div className='position-icon'>👩</div>
                                    <h4>Women Representatives</h4>
                                    <p>Special seats ensuring women's representation in the National Assembly, one from each county.</p>
                                </div>
                                <div className='position-card'>
                                    <div className='position-icon'>⚖️</div>
                                    <h4>Senators</h4>
                                    <p>Members of the Senate who represent counties and participate in the legislative process affecting counties.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Statistics */}
                    <section className='content-section'>
                        <div className='section-header'>
                            <div className='section-icon'>📊</div>
                            <h2>Kenya by Numbers</h2>
                        </div>
                        <div className='section-content'>
                            <div className='stats-container'>
                                <div className='stat-item'>
                                    <div className='stat-number'>47</div>
                                    <div className='stat-label'>Counties</div>
                                    <div className='stat-description'>Administrative units established by the 2010 Constitution</div>
                                </div>
                                <div className='stat-item'>
                                    <div className='stat-number'>290</div>
                                    <div className='stat-label'>Constituencies</div>
                                    <div className='stat-description'>Electoral areas for National Assembly representation</div>
                                </div>
                                <div className='stat-item'>
                                    <div className='stat-number'>1,450+</div>
                                    <div className='stat-label'>Wards</div>
                                    <div className='stat-description'>Smallest electoral units for county assembly representation</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;