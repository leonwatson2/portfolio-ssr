import React, { Component } from 'react'
import { Section, CardReveal, Row, Col, CardContent, CardTitle, Card, CardImage } from './layout';

export default class Home extends Component {
    render() {
        return (
            <div className="">
                <Section leon-ledge containerClassName={'polka-dot'} className={'blue-text'}>
                    <h2 className="header">Hey, I'm Leon. I do front-end things for/with cool people.</h2>
                </Section>
                <Section containerClassName={'polka-dot-inverse'}>
                    <h2 className="black-text">Here's some things I've done.</h2>
                    <Row>
                        <Col sizes="s12 m6">
                            <Card className={'black-text'}>
                                <CardImage imageUrl={'assets/images/skagen.png'}></CardImage>
                                <CardContent>
                                    <CardTitle title="Skagen" className={'activator'} icon="more_vert"/>
                                </CardContent>
                                <CardReveal>
                                    <CardTitle title="Skagen" icon="close" />
                                    <p>E-Commerce app done when I was on contract with <a href="https://www.fossil.com" target="_blank"> Fossil <i className={'material-icons tiny'}>open_in_new</i> </a></p>

                                </CardReveal>
                            </Card>
                        </Col>
                    </Row>
                </Section>
            </div>
        )
    }
}
