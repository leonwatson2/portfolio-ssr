import React, { useEffect, useState } from 'react'
import { Section, CardReveal, Row, Col, CardContent, CardTitle, Card, CardImage, ProjectCardTile } from './layout';
import TechSlider from './TechSlider';

export default (props) => {
        
    const [projects, updateProjects] = useState([])

    useEffect(() => {
        if(__isBrowser__){
            updateProjects(window.__STATE__.projects)
            delete window.__STATE__.projects
        } else {
            updateProjects(props.staticContext.projects)
        }

    }, [])

        return (
            <div className="">
                <Section leon-ledge containerClassName={'polka-dot'} className={'blue-text'}>
                    <h2 className="header">Hey, I'm Leon. I do front-end things for/with cool people.</h2>
                </Section>
                <Section containerClassName={'polka-dot-inverse'}>
                    <h2 className="black-text">Here's some things I've done.</h2>
                    <Row>
                        {
                            projects.map((project) => {
                                return (
                                    <Col key={project.name} sizes="s12 m6">
                                        <Card className={'black-text animated fadeIn'}>
                                            <CardImage imageUrl={project.img}></CardImage>
                                            <CardContent>
                                                <CardTitle title={project.name} className={'activator'} icon="more_vert"/>
                                            </CardContent>
                                            <CardReveal>
                                                <ProjectCardTile title={project.name} icon="close" url={project.url} />
                                                <div dangerouslySetInnerHTML={ { __html:project.description } } ></div>
                                                <TechSlider tech={project.tech} />
                                            </CardReveal>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Section>
            </div>
        )
}
