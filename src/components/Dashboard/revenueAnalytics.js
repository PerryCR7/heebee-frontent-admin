import React, { Component } from 'react';
import { Row, Col, Card,ButtonGroup, Button } from "react-bootstrap";

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "../../css/miniWidgets.css"
import {BsFillCircleFill} from "react-icons/bs";
import {VscTriangleUp} from "react-icons/vsc";

class RevenueAnalytics extends Component {
    state = {
        series: [{
            name: '2021',
            type: 'column',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }, {
            name: '2020',
            type: 'line',
            data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
        }],
        options: {
            chart: {
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: [0, 3],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%',
                },
            },
            dataLabels: {
                enabled: false,
            },

            legend: {
                show: false,
            },
            colors: ['rgba(102,77,3,0.5)', '#292626'],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card className="mt-4">
                    <Card.Body>
                        <div className="float-end d-none d-md-inline-block">
                            <ButtonGroup className="mb-2 graph-buttons" style={{fontFamily:"Nunito,sans-serif"}}>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Today</Button>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Weekly</Button>
                                <Button size="sm" variant="light" style={{backgroundColor:"#EFF2F7",fontSize:"13px"}} type="button">Monthly</Button>
                            </ButtonGroup>
                        </div>
                        <h4 className="card-title mb-4 revenue" >Revenue Analytics</h4>
                        <div>
                            <div id="line-column-chart" className="apex-charts" dir="ltr">
                                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="280" />
                            </div>
                        </div>
                    </Card.Body>

                    <Card.Body className="border-top text-center">
                        <Row>
                            <Col sm={4}>
                            <p className="mb-2 text-muted text-truncate ra-14">This month :</p>
                                <div className="d-inline-flex">
                                    <h5 className="me-2">$12,253</h5>
                                    <div className="text-success">
                                    <VscTriangleUp/>2.2 %
                                                    </div>
                                </div>
                                
                            </Col>

                            <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-2 text-muted text-truncate ra-14"><BsFillCircleFill style={{color:"rgba(102,77,3,0.5)"}}/> This Year :</p>
                                    <div className="d-inline-flex">
                                        <h5 className="mb-0 me-2">$ 34,254</h5>
                                        <div className="text-success">
                                            <VscTriangleUp/>2.1 %
                                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-2 text-muted text-truncate ra-14"><BsFillCircleFill style={{color:"#292626"}}/> Previous Year :</p>
                                    <div className="d-inline-flex">
                                        <h5 className="mb-0 me-2">$ 32,695</h5>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default RevenueAnalytics;