/**
 * @typedef {!{
 *              toJSON:function():string,
 *              getName:function():string,
 *              getFontName:function():string,
 *              getFontSize:function():num,
 *              getPrimaryColor:function():SSAColor,
 *              getSecondaryColor:function():SSAColor,
 *              getTertiaryColor:function():SSAColor,
 *              getQuaternaryColor:function():SSAColor,
 *              getBold:function():num,
 *              getItalic:function():boolean,
 *              getUnderline:function():boolean,
 *              getStrikeout:function():boolean,
 *              getScaleX:function():num,
 *              getScaleY:function():num,
 *              getSpacing:function():num,
 *              getAngle:function():num,
 *              getBorderStyle:function():num,
 *              getOutlineX:function():num,
 *              getOutlineY:function():num,
 *              getShadow:function():num,
 *              getAlignment:function():num,
 *              getMargins:function():Array<num>,
 *              getEncoding:function():num,
 *              setName:function(string):void,
 *              setFontName:function(string):void,
 *              setFontSize:function(num):void,
 *              setPrimaryColor:function(SSAColor):void,
 *              setSecondaryColor:function(SSAColor):void,
 *              setTertiaryColor:function(SSAColor):void,
 *              setQuaternaryColor:function(SSAColor):void,
 *              setBold:function(num):void,
 *              setItalic:function(boolean):void,
 *              setUnderline:function(boolean):void,
 *              setStrikeout:function(boolean):void,
 *              setScale:function(num):void,
 *              setScaleX:function(num):void,
 *              setScaleY:function(num):void,
 *              setSpacing:function(num):void,
 *              setAngle:function(num):void,
 *              setBorderStyle:function(num):void,
 *              setOutline:function(num):void,
 *              setOutlineX:function(num):void,
 *              setOutlineY:function(num):void,
 *              setShadow:function(num):void,
 *              setAlignment:function(num):void,
 *              setMargins:function(num,num,num):void,
 *              setMarginLeft:function(num):void,
 *              setMarginRight:function(num):void,
 *              setMarginVertical:function(num):void,
 *              setEncoding:function(num):void
 *          }}
 */
var SSAStyleDefinition;

/**
 * @type {function(new:SSAStyleDefinition)}
 */
sabre.SSAStyleDefinition = function(){};