import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import NavigationBar from './components/common/navigationBar/NavigationBar';
import HomePage from './components/homePage/HomePage';
import History from './components/History';
import English from './assets/locale/en-US.json';
import Hindi from './assets/locale/hi-IN.json';
import { AppState } from './reducers';
import { connect } from 'react-redux';

type AppProps = AppState;

const App: React.FC<AppProps> = (props) => {
    console.log('App:React.FC -> props', props);
    const { locale } = props.utilsReducer;

    let language;
    switch (locale) {
        case 'en-US':
            language = English;
            break;
        case 'hi-IN':
            language = Hindi;
            break;
        default:
            language = English;
            break;
    }

    return (
        <div>
            <IntlProvider locale={locale} messages={language}>
                <Router history={History}>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/misc' render={() => <h1>misc</h1>} />
                        <Route
                            path='/projects'
                            render={() => <h1>projects</h1>}
                        />
                        <Route
                            path='/contactMe'
                            render={() => <h1>contactMe</h1>}
                        />
                        <Route
                            path='/potterPage'
                            render={() => <h1>potterPage</h1>}
                        />
                        <Route path='/images' render={() => <h1>images</h1>} />
                    </Switch>
                </Router>
            </IntlProvider>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    utilsReducer: state.utilsReducer,
});
export default connect(mapStateToProps)(App);
