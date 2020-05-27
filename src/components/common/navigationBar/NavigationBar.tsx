import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setLocale } from '../../../actions/utilsActions';
import {
    SetLocaleAction,
    UtilsActions,
    AppActions,
} from '../../../actions/types';
import '../../../styles/index.scss';
import { AppState } from '../../../reducers';
import { ThunkDispatch } from 'redux-thunk';

const languageOptions = [
    { key: 'English', text: 'English', value: 'en-US' },
    { key: 'Hindi', text: 'Hindi', value: 'hi-IN' },
];

interface NavigationBarProps {
    setLocaleLanguage?: (locale: string) => void | undefined;
}
type Props = NavigationBarProps & LinkDispatchProps;

interface NavigationBarState {}
class NavigationBar extends Component<Props, NavigationBarState> {
    render() {
        const { setLocaleLanguage } = this.props;

        return (
            <div className='navbar'>
                <NavLink to='/'>
                    <p className='logo'>Jatin Grover</p>
                </NavLink>
                <nav>
                    <ul style={{ display: 'inline-block' }}>
                        <li>
                            <NavLink to='/misc' className='link'>
                                <FormattedMessage
                                    id='navbar.miscellaneous'
                                    defaultMessage='Miscellaneous'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/images' className='link'>
                                <FormattedMessage
                                    id='navbar.images'
                                    defaultMessage='Images'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactMe' className='link'>
                                <FormattedMessage
                                    id='navbar.contactMe'
                                    defaultMessage='Contact Me'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/potterPage' className='link'>
                                <FormattedMessage
                                    id='navbar.harryPotter'
                                    defaultMessage='HP7'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={languageOptions}
                                text='lang'
                                // {
                                //     <FormattedMessage
                                //         id='navbar.language'
                                //         defaultMessage='Language'
                                //     />
                                // }
                                onChange={(e, data: any) => {
                                    setLocaleLanguage(data.value);
                                }}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
interface LinkDispatchProps {
    setLocaleLanguage: (locale: string) => void;
}
const mapStateToProps = (state: AppState) => ({
    utilsReducer: state.utilsReducer,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    setLocaleLanguage: bindActionCreators(setLocale, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
