var wms_layers = [];

var format_morfoOutput_0 = new ol.format.GeoJSON();
var features_morfoOutput_0 = format_morfoOutput_0.readFeatures(json_morfoOutput_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morfoOutput_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morfoOutput_0.addFeatures(features_morfoOutput_0);
var lyr_morfoOutput_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morfoOutput_0, 
                style: style_morfoOutput_0,
                popuplayertitle: "morfoOutput",
                interactive: true,
    title: 'morfoOutput<br />\
    <img src="styles/legend/morfoOutput_0_0.png" /> 7 - 125<br />\
    <img src="styles/legend/morfoOutput_0_1.png" /> 125 - 189<br />\
    <img src="styles/legend/morfoOutput_0_2.png" /> 189 - 293<br />\
    <img src="styles/legend/morfoOutput_0_3.png" /> 293 - 420<br />\
    <img src="styles/legend/morfoOutput_0_4.png" /> 420 - 1661<br />'
        });
var format_hidrografia_1 = new ol.format.GeoJSON();
var features_hidrografia_1 = format_hidrografia_1.readFeatures(json_hidrografia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_1.addFeatures(features_hidrografia_1);
var lyr_hidrografia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_1, 
                style: style_hidrografia_1,
                popuplayertitle: "hidrografia",
                interactive: true,
                title: '<img src="styles/legend/hidrografia_1.png" /> hidrografia'
            });
var format_Poblados_2 = new ol.format.GeoJSON();
var features_Poblados_2 = format_Poblados_2.readFeatures(json_Poblados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblados_2.addFeatures(features_Poblados_2);
var lyr_Poblados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblados_2, 
                style: style_Poblados_2,
                popuplayertitle: "Poblados",
                interactive: true,
                title: '<img src="styles/legend/Poblados_2.png" /> Poblados'
            });

lyr_morfoOutput_0.setVisible(true);lyr_hidrografia_1.setVisible(true);lyr_Poblados_2.setVisible(true);
var layersList = [lyr_morfoOutput_0,lyr_hidrografia_1,lyr_Poblados_2];
lyr_morfoOutput_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Alt_mean': 'Alt_mean', 'Alt_min': 'Alt_min', 'Alt_max': 'Alt_max', 'Pen_count': 'Pen_count', 'Pen_mean': 'Pen_mean', 'AREA_KM2': 'AREA_KM2', 'PER_KM': 'PER_KM', 'REL_Km': 'REL_Km', 'Circ_Cuenca': 'Circ_Cuenca', 'MRN': 'MRN', 'CLASS_MRN': 'CLASS_MRN', });
lyr_hidrografia_1.set('fieldAliases', {'objectid': 'objectid', 'fid_drenes': 'fid_drenes', 'cod_comuna': 'cod_comuna', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Dren_Tipo': 'Dren_Tipo', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_Poblados_2.set('fieldAliases', {'id': 'id', 'Poblados': 'Poblados', });
lyr_morfoOutput_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Alt_mean': 'TextEdit', 'Alt_min': 'TextEdit', 'Alt_max': 'TextEdit', 'Pen_count': 'TextEdit', 'Pen_mean': 'TextEdit', 'AREA_KM2': 'TextEdit', 'PER_KM': 'TextEdit', 'REL_Km': 'TextEdit', 'Circ_Cuenca': 'TextEdit', 'MRN': 'TextEdit', 'CLASS_MRN': 'TextEdit', });
lyr_hidrografia_1.set('fieldImages', {'objectid': 'TextEdit', 'fid_drenes': 'TextEdit', 'cod_comuna': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'Nombre': 'TextEdit', 'Dren_Tipo': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_Poblados_2.set('fieldImages', {'id': 'TextEdit', 'Poblados': 'TextEdit', });
lyr_morfoOutput_0.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Alt_mean': 'inline label - always visible', 'Alt_min': 'inline label - always visible', 'Alt_max': 'inline label - always visible', 'Pen_count': 'hidden field', 'Pen_mean': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'PER_KM': 'inline label - always visible', 'REL_Km': 'inline label - always visible', 'Circ_Cuenca': 'inline label - always visible', 'MRN': 'inline label - always visible', 'CLASS_MRN': 'inline label - always visible', });
lyr_hidrografia_1.set('fieldLabels', {'objectid': 'hidden field', 'fid_drenes': 'hidden field', 'cod_comuna': 'hidden field', 'shape_leng': 'hidden field', 'st_length_': 'hidden field', 'Nombre': 'inline label - always visible', 'Dren_Tipo': 'hidden field', 'Region': 'hidden field', 'Provincia': 'hidden field', 'Comuna': 'hidden field', });
lyr_Poblados_2.set('fieldLabels', {'id': 'hidden field', 'Poblados': 'inline label - always visible', });
lyr_Poblados_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});