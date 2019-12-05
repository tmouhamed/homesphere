import React from 'react';
import Burgermenu from '../../components/Burgermenu/Burgermenu';
import Secondhero from '../../components/Secondhero/Secondhero';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import './PropertiesPage.scss';
import Listings from '../../components/Listings/Listings';
import FilterSearch from '../../components/FilterSearch/FilterSearch';


class PropertiesPage extends React.Component {
    render() {
        return (
            <>
                {/* use a classnames npm package to use the same header but add more changes for this scpecific page*/}
                <Header className={classnames("main__secondHeader", this.props.className)} logoImage={this.props.logoImage} />
                <Burgermenu />
                <Secondhero />
                <main className="main">
                    <FilterSearch handleGeneric={this.props.handleGeneric} searchClick={this.props.searchClick} filterProperty={this.props.filterProperty}/>
                    <Listings sendingProperties={this.props.sendingProperties} />
                </main>
            </>
        );
    }
}
export default PropertiesPage;