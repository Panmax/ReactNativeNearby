/**
 * Created by pan on 16/3/29.
 */
var React = require('react-native');

var {
    StyleSheet,
    View,
    StatusBarIOS,
    TabBarIOS
    } = React;

//是否开启真实的定位；如果开启了_GEO_OPEN，_GEO_TEST_POS则会失效
var _GEO_OPEN = false;
//模拟定位数据
var _GEO_TEST_POS = '121.390686,31.213976';

StatusBarIOS.setStyle('light-content');
StatusBarIOS.setNetworkActivityIndicatorVisible(true);

var Nearby = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <TabBarIOS>
                    <TabBarIOS.Item></TabBarIOS.Item>
                    <TabBarIOS.Item></TabBarIOS.Item>
                    <TabBarIOS.Item></TabBarIOS.Item>
                    <TabBarIOS.Item></TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Nearby;