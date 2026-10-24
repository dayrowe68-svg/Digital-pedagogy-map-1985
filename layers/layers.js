var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_GreaterPonsonbySuburbs_1 = new ol.format.GeoJSON();
var features_GreaterPonsonbySuburbs_1 = format_GreaterPonsonbySuburbs_1.readFeatures(json_GreaterPonsonbySuburbs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreaterPonsonbySuburbs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreaterPonsonbySuburbs_1.addFeatures(features_GreaterPonsonbySuburbs_1);
var lyr_GreaterPonsonbySuburbs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreaterPonsonbySuburbs_1, 
                style: style_GreaterPonsonbySuburbs_1,
                popuplayertitle: 'Greater Ponsonby Suburbs',
                interactive: true,
                title: '<img src="styles/legend/GreaterPonsonbySuburbs_1.png" /> Greater Ponsonby Suburbs'
            });
var format_Projectpoints_2 = new ol.format.GeoJSON();
var features_Projectpoints_2 = format_Projectpoints_2.readFeatures(json_Projectpoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectpoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectpoints_2.addFeatures(features_Projectpoints_2);
var lyr_Projectpoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectpoints_2, 
                style: style_Projectpoints_2,
                popuplayertitle: 'Project points',
                interactive: true,
                title: '<img src="styles/legend/Projectpoints_2.png" /> Project points'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GreaterPonsonbySuburbs_1.setVisible(true);lyr_Projectpoints_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GreaterPonsonbySuburbs_1,lyr_Projectpoints_2];
lyr_GreaterPonsonbySuburbs_1.set('fieldAliases', {'id': 'id', 'parent_id': 'parent_id', 'name': 'name', 'type': 'type', 'start_date': 'start_date', 'name_ascii': 'name_ascii', '1986': '1986', '1966': '1966', '1972': '1972', '2013': '2013', });
lyr_Projectpoints_2.set('fieldAliases', {'Name': 'Name', 'Photo': 'Photo', 'Descriptio': 'Descriptio', 'Collection': 'Collection', 'URL': 'URL', 'Archive': 'Archive', });
lyr_GreaterPonsonbySuburbs_1.set('fieldImages', {'id': 'Range', 'parent_id': 'Range', 'name': 'TextEdit', 'type': 'TextEdit', 'start_date': 'DateTime', 'name_ascii': 'TextEdit', '1986': 'TextEdit', '1966': 'TextEdit', '1972': 'TextEdit', '2013': 'TextEdit', });
lyr_Projectpoints_2.set('fieldImages', {'Name': 'TextEdit', 'Photo': 'ExternalResource', 'Descriptio': 'TextEdit', 'Collection': 'TextEdit', 'URL': 'TextEdit', 'Archive': 'TextEdit', });
lyr_GreaterPonsonbySuburbs_1.set('fieldLabels', {'id': 'no label', 'parent_id': 'no label', 'name': 'no label', 'type': 'no label', 'start_date': 'no label', 'name_ascii': 'no label', '1986': 'no label', '1966': 'no label', '1972': 'no label', '2013': 'no label', });
lyr_Projectpoints_2.set('fieldLabels', {'Name': 'no label', 'Photo': 'no label', 'Descriptio': 'no label', 'Collection': 'no label', 'URL': 'no label', 'Archive': 'no label', });
lyr_Projectpoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});