module.exports = {
  name: 'ng-gm-poc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-gm-poc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
