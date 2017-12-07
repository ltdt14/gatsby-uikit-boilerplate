import React, { Component } from 'react';
import { browserHistory, history } from 'react-router';
import Link, { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// local components
import StylingOverrides from '../components/StylingOverrides';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

class Styleguide extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Styleguide</title>
                </Helmet>
                <StylingOverrides>
                    <section className="uk-section uk-section-large uk-section-default">
                        <div className="uk-container">
                            <h1>Styleguide</h1>
                            <h2>Typo</h2>
                            <h1 className="uk-heading-primary">Heading .uk-heading-primary</h1>
                            <h1 className="uk-heading-hero">Heading .uk-heading-hero</h1>
                            <h1 className="uk-heading-divider">Heading with divider .uk-heading-divider</h1>
                            <h1 className="uk-heading-bullet">Heading .uk-heading-bullet</h1>
                            <h1 className="uk-heading-line uk-text-center">
                                <span>Heading Line .uk-heading-line</span>
                            </h1>
                            <h1>h1, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h1>
                            <h2>h2, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h2>
                            <h3>h3, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h3>
                            <h4>h4, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h4>
                            <h5>h5, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h5>
                            <h6>h6, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h6>
                            <p>
                                Paragraph: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>

                            <h3 className="uk-heading-bullet">Links</h3>
                            <a href="">Link</a>
                            <a className="uk-link-muted" href="">Link muted</a>

                            <h3 className="uk-heading-bullet">Unordered List</h3>
                            <ul className="uk-list">
                                <li>List item 1</li>
                                <li>List item 2</li>
                                <li>List item 3</li>
                            </ul>

                            <h3 className="uk-heading-bullet">Unordered List with Bullets</h3>
                            <ul className="uk-list uk-list-bullet">
                                <li>List item 1</li>
                                <li>List item 2</li>
                                <li>List item 3</li>
                            </ul>

                            <h3 className="uk-heading-bullet">Unordered List with divider</h3>
                            <ul className="uk-list uk-list-divider">
                                <li>List item 1</li>
                                <li>List item 2</li>
                                <li>List item 3</li>
                            </ul>


                            <h3 className="uk-heading-bullet">Unordered List stripped</h3>
                            <ul className="uk-list uk-list-striped">
                                <li>List item 1</li>
                                <li>List item 2</li>
                                <li>List item 3</li>
                            </ul>

                            <h3 className="uk-heading-bullet">Description List</h3>
                            <dl className="uk-description-list">
                                <dt>Description List Item Heading</dt>
                                <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
                                <dt>Description List Item Heading</dt>
                                <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                                <dt>Description List Item Heading</dt>
                                <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                            </dl>

                            <h3 className="uk-heading-bullet">Table</h3>
                            <table className="uk-table">
                                <caption>Table Caption</caption>
                                <thead>
                                <tr>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <td>Table Footer</td>
                                    <td>Table Footer</td>
                                    <td>Table Footer</td>
                                </tr>
                                </tfoot>
                                <tbody>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                </tbody>
                            </table>
                            <h3 className="uk-heading-bullet">Table with divider</h3>
                            <table className="uk-table uk-table-divider">
                                <thead>
                                <tr>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="uk-heading-bullet">Table stripped</h3>
                            <table className="uk-table uk-table-striped">
                                <thead>
                                <tr>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="uk-heading-bullet">Table with hover effect</h3>
                            <table className="uk-table uk-table-hover uk-table-divider">
                                <thead>
                                <tr>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                    <th>Table Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                </tbody>
                            </table>

                            <h2 className="uk-heading-line uk-text-center">
                                <span>Others</span>
                            </h2>

                            <h3 className="uk-heading-bullet">Divider</h3>
                            <hr/>

                            <h3 className="uk-heading-bullet">Divideer Icon</h3>
                            <hr className="uk-divider-icon"/>

                                <h3 className="uk-heading-bullet">Divider small</h3>
                                <hr className="uk-divider-small"/>

                                    <h3 className="uk-heading-bullet">Label</h3>
                                    <span className="uk-label">Default</span>

                                    <span className="uk-label uk-label-success">Success</span>

                                    <span className="uk-label uk-label-warning">Warning</span>

                                    <span className="uk-label uk-label-danger">Danger</span>

                                    <h3 className="uk-heading-bullet">Badge</h3>
                                    <span className="uk-badge">1</span>
                                    <span className="uk-badge">100</span>


                                    <h3 className="uk-heading-bullet">Pagination</h3>
                                    <ul className="uk-pagination" uk-margin>
                                        <li>
                                            <a href="#">
                                                <span uk-pagination-previous></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">1</a>
                                        </li>
                                        <li className="uk-disabled">
                                            <span>...</span>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">5</a>
                                        </li>
                                        <li>
                                            <a href="#">6</a>
                                        </li>
                                        <li className="uk-active">
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <a href="#">8</a>
                                        </li>
                                        <li>
                                            <a href="#">9</a>
                                        </li>
                                        <li>
                                            <a href="#">10</a>
                                        </li>
                                        <li className="uk-disabled">
                                            <span>...</span>
                                        </li>
                                        <li>
                                            <a href="#">20</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span uk-pagination-next/>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="uk-heading-bullet">Pagination Previous and next</h3>
                                    <ul className="uk-pagination">
                                        <li>
                                            <a href="">
                                                <span uk-pagination-previous/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span uk-pagination-next/>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="uk-heading-bullet">Buttons</h3>
                                    <p uk-margin>
                                        <button className="uk-button uk-button-default">Default</button>
                                        <button className="uk-button uk-button-primary">Primary</button>
                                        <button className="uk-button uk-button-default brand-primary">Default .brand-primary</button>
                                        <button className="uk-button uk-button-secondary">Secondary</button>
                                        <button className="uk-button uk-button-danger">Danger</button>
                                        <button className="uk-button uk-button-text">Text</button>
                                        <button className="uk-button uk-button-link">Link</button>
                                    </p>


                                    <h2 className="uk-heading-line uk-text-center">
                                        <span>Advanced Components</span>
                                    </h2>

                                    <h3>Accordion</h3>
                                    <ul data-uk-accordion>
                                        <li className="uk-open">
                                            <h3 className="uk-accordion-title">Item 1</h3>
                                            <div className="uk-accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h3 className="uk-accordion-title">Item 2</h3>
                                            <div className="uk-accordion-content">
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h3 className="uk-accordion-title">Item 3</h3>
                                            <div className="uk-accordion-content">
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h3>Article</h3>
                                    <article className="uk-article">

                                        <h1 className="uk-article-title">
                                            <a className="uk-link-reset" href="">Heading</a>
                                        </h1>

                                        <p className="uk-article-meta">
                                            Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a>
                                        </p>

                                        <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                        <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                                            <div>
                                                <a className="uk-button uk-button-text" href="#">Read more</a>
                                            </div>
                                            <div>
                                                <a className="uk-button uk-button-text" href="#">5 Comments</a>
                                            </div>
                                        </div>

                                    </article>

                                    <h3>Drop</h3>
                                    <div className="uk-inline">
                                        <button className="uk-button uk-button-default" type="button">Hover me</button>
                                        <div data-uk-drop>
                                            <div className="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                                        </div>
                                    </div>

                                    <h2>Menus and Navs</h2>
                                    <h3>Dropdown</h3>
                                    <button className="uk-button uk-button-default" type="button">Hover me</button>
                                    <div className="uk-width-large" data-uk-dropdown>
                                        <div className="uk-dropdown-grid uk-child-width-1-2@m" data-uk-grid>
                                            <div>
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li className="uk-active">
                                                        <a href="#">Active</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li className="uk-nav-header">Header</li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li className="uk-nav-divider"/>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li className="uk-active">
                                                        <a href="#">Active</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li className="uk-nav-header">Header</li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                    <li className="uk-nav-divider"/>
                                                    <li>
                                                        <a href="#">Item</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h3>Progress Bar</h3>
                                    <progress id="progressbar" className="uk-progress" value="10" max="100"/>



                                    <h3>Card</h3>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-header">
                                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-auto">
                                                    <img className="uk-border-circle" width="40" height="40" src="../docs/images/avatar.jpg"/>
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                                    <p className="uk-text-meta uk-margin-remove-top">
                                                        <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                        <div className="uk-card-footer">
                                            <a href="#" className="uk-button uk-button-text">Read more</a>
                                        </div>
                                    </div>

                                    <h2>Forms</h2>
                                    <form>
                                        <fieldset className="uk-fieldset">

                                            <legend className="uk-legend">Legend</legend>

                                            <div className="uk-margin">
                                                <label className="uk-form-label" For="form-stacked-text">Input</label>
                                                <div className="uk-form-controls">
                                                    <input className="uk-input" id="form-stacked-text" type="text" placeholder="Some text..."/>
                                                </div>
                                            </div>

                                            <div className="uk-margin">
                                                <label className="uk-form-label" For="form-stacked-select">Select</label>

                                                <select className="uk-select" id="form-stacked-select">
                                                    <option>Option 01</option>
                                                    <option>Option 02</option>
                                                </select>
                                            </div>

                                            <div className="uk-margin">
                                                <textarea className="uk-textarea" rows="5" placeholder="Textarea"/>
                                            </div>

                                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                                <div className="uk-form-label">Radio</div>
                                                <label><input className="uk-radio" type="radio" name="radio2" checked/> A</label>
                                                <label><input className="uk-radio" type="radio" name="radio2"/> B</label>
                                            </div>

                                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                                <div className="uk-form-label">Checkbox</div>

                                                <label><input className="uk-checkbox" type="checkbox" checked/> A</label>
                                                <label><input className="uk-checkbox" type="checkbox"/> B</label>
                                            </div>

                                            <div className="uk-margin">
                                                <div className="uk-form-label">Range</div>

                                                <input className="uk-range" type="range" value="2" min="0" max="10" step="0.1"/>
                                            </div>

                                        </fieldset>
                                    </form>

                                    <h3>
                                        Colors
                                    </h3>
                                    <div className="uk-child-width-1-2@s uk-grid-collapse uk-text-center" data-uk-grid>
                                        <div>
                                            <div className="uk-tile uk-tile-default">
                                                <p className="uk-h4">Default</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-tile uk-tile-muted">
                                                <p className="uk-h4">Muted</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-tile uk-tile-primary">
                                                <p className="uk-h4">Primary</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-tile uk-tile-secondary">
                                                <p className="uk-h4">Secondary</p>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div className="uk-alert uk-alert-success"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
                        <div className="uk-alert uk-alert-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
                        <div className="uk-alert uk-alert-danger danger-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
                    </section>


                    <section className="uk-section uk-section-large uk-section-muted">
                        <div className="uk-container">
                            <h1>Section muted background</h1>
                        </div>
                    </section>

                    <section className="uk-section uk-section-large uk-section-default">
                        <div className="uk-container">

                            <h1>Section default background</h1>
                        </div>
                    </section>

                    <section className="uk-section uk-section-large uk-section-primary">
                        <div className="uk-container">

                            <h1>Section primary background</h1>
                        </div>

                    </section>

                    <section className="uk-section uk-section-large uk-section-secondary">
                        <div className="uk-container">
                            <h1>Section secondary background</h1>
                        </div>
                    </section>
                </StylingOverrides>
            </div>
        );
    }
}

export default Styleguide;