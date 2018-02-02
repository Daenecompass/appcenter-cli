/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a HandledErrorDetails.
 * @extends models['HandledError']
 */
class HandledErrorDetails extends models['HandledError'] {
  /**
   * Create a HandledErrorDetails.
   * @member {string} [name]
   * @member {string} [summary]
   * @member {object} [reasonFrame]
   * @member {string} [reasonFrame.className] name of the class
   * @member {string} [reasonFrame.method] name of the method
   * @member {boolean} [reasonFrame.classMethod] is a class method
   * @member {string} [reasonFrame.file] name of the file
   * @member {number} [reasonFrame.line] line number
   * @member {boolean} [reasonFrame.appCode] this line isn't from any framework
   * @member {string} [reasonFrame.frameworkName] Name of the framework
   * @member {string} [reasonFrame.codeFormatted] Formatted frame string
   * @member {string} [reasonFrame.codeRaw] Unformatted Frame string
   * @member {string} [reasonFrame.language] programming language of the frame.
   * Possible values include: 'JavaScript', 'CSharp', 'Objective-C',
   * 'Objective-Cpp', 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
   * @member {string} [reasonFrame.methodParams] parameters of the frames
   * method
   * @member {string} [reasonFrame.exceptionType] Exception type.
   * @member {string} [reasonFrame.osExceptionType] OS exception type. (aka.
   * SIGNAL)
   * @member {object} [properties]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HandledErrorDetails
   *
   * @returns {object} metadata of HandledErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HandledErrorDetails',
      type: {
        name: 'Composite',
        className: 'HandledErrorDetails',
        modelProperties: {
          errorId: {
            required: false,
            serializedName: 'error_id',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          deviceName: {
            required: false,
            serializedName: 'device_name',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: false,
            serializedName: 'os_version',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'os_type',
            type: {
              name: 'String'
            }
          },
          country: {
            required: false,
            serializedName: 'country',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          summary: {
            required: false,
            serializedName: 'summary',
            type: {
              name: 'String'
            }
          },
          reasonFrame: {
            required: false,
            serializedName: 'reason_frame',
            type: {
              name: 'Composite',
              className: 'ErrorStackFrame'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HandledErrorDetails;