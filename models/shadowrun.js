/**
 * Created by chapeau on 9/21/16.
 */

module.exports = function(sequelize, DataTypes){
    return sequelize.define('shadowrun', {
        title:{
            type: DataTypes.STRING
        }
    });
};