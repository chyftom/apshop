/**
 * 本地配置
 * @type
 * #sequelize-auto -h localhost -d apshop -u apshop -x apShop147852
 */
exports.sequelize  = {
    // 单数据库信息配置

    dialect: 'mysql',
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    username: 'apshop',
    // 密码
    password: 'apShop147852',
    // 数据库名
    database: 'apshop',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false, // true by default
        freezeTableName: true
    },
    timezone: '+08:00' //东八时区
};