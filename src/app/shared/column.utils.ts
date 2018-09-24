export const restrictedColumns = [
    'Id',
    'ArtistLink',
    'Link',
    'Mp3Url',
    'ClaimException'
];
export const columnNameMappings = {
    'WriterString': 'Writer',
    'FirstReleaseYear': 'Released',
    'CreatedDate': 'Created Date',
    'RecordLabels': 'Record Lables',
    'MusicControls': 'Music Controls',
    'NotesCount': 'Notes',
    'SyncCollectablePercentage': '#',
    'AcquisitionLocation': 'Location',
    'RecordLabelGroup': 'Record Label Group',
    'PipsCode': 'Code'
};

export const filterRestrictedColumns = (restrictedColumns) => {
    return column => restrictedColumns.indexOf(column) === -1;
}
export const mapColumnName = (columnNameMappings) => {
    return column => columnNameMappings[column] || column;
}