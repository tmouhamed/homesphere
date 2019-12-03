import React from 'react';
import Burgermenu from '../../components/Burgermenu/Burgermenu';
import Secondhero from '../../components/Secondhero/Secondhero';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import './PropertiesPage.scss';


class PropertiesPage extends React.Component {
    render() {
        return (
            <>
                {/* use a classnames npm package to use the same header but add more changes for this scpecific page*/}
                <Header className={classnames("main__secondHeader", this.props.className)} logoImage={this.props.logoImage} />
                <Burgermenu />
                <main>
                    <Secondhero />
                </main>
            </>
        );
    }
}
export default PropertiesPage;