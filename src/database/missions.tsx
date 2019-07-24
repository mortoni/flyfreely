export default [
    {
        id: 1809,
        name: 'dummy',
        status: 'DRAFT',
        completionMessage: null,
        missionDate: '2019-07-02T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 10,
            parentId: 3,
            name: 'Testing',
            description: 'General equipment testing',
            active: true,
            coreType: null,
        },
        uid: '164-20190703-034952',
        locationId: 1277,
        locationName: 'Brisbane - Test',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [],
        craftNicknames: [],
        missionCrewDetails: [],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 118,
        missionEstimatedTime: 3600,
        isDummy: true,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 118,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (With Primary No Approval)',
            workflowId: 63,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1656,
        name: 'asdad',
        status: 'COMPLETED',
        completionMessage: 'Happy days',
        missionDate: '2019-06-17T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: 'asdasd',
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190601-111536',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: 55,
        crewNotes: 'asdasd',
        missionWorkflowVersionId: 118,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 118,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (With Primary No Approval)',
            workflowId: 63,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1720,
        name: 'Example Mission',
        status: 'READY_TO_FLY',
        completionMessage: null,
        missionDate: '2019-06-13T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190614-054324',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 117,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 117,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (No Primary)',
            workflowId: 62,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1657,
        name: 'Test (With Primary No Approval)',
        status: 'COMPLETED',
        completionMessage: 'Blah',
        missionDate: '2019-06-01T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: '',
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190602-065656',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: 55,
        crewNotes: 'asdasd',
        missionWorkflowVersionId: 118,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 118,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (With Primary No Approval)',
            workflowId: 63,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1658,
        name: 'Test (With Primary No Approval)',
        status: 'DRAFT',
        completionMessage: null,
        missionDate: '2019-06-01T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: '',
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190602-070523',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: 55,
        crewNotes: 'asdasd',
        missionWorkflowVersionId: 120,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: {
            id: 272,
            status: 'PENDING',
            messageFromApprover: null,
            organisationName: null,
            requestTime: '2019-06-02T07:05:42Z',
            requestedBy: {
                id: 109,
                firstName: 'Own ReOC',
                lastName: 'Admin',
            },
            resolutionTime: null,
            approvedBy: null,
            conditions: [],
        },
        missionWorkflowVersion: {
            id: 120,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: 123,
            additionalAuthorityIds: [],
            workflowName: 'Filled (No Approval)',
            workflowId: 65,
            delegatedAuthority: {
                id: 123,
                authorityType: {
                    id: 25,
                    name: 'Company Excluded RPA',
                    identifierLabel: 'Notification Number',
                    personnelRegisterLabel: 'Remote Pilot Register',
                    aircraftRegisterLabel: 'RPA Register',
                    hasExpiry: false,
                    hasAircraftRegister: true,
                    hasPersonnelRegister: true,
                    hasIdentifier: false,
                    hasMultipleInstances: false,
                    abbreviation: 'EX CAT',
                    requiresApproval: false,
                },
                organisation: {
                    id: 164,
                    name: 'Dev Business Customer',
                    personalOrganisation: false,
                    arn: null,
                    activeJurisdictions: [
                        {
                            id: 1,
                            name: 'Australia',
                            ansp: null,
                            caa: null,
                            atsb: null,
                        },
                    ],
                },
                startDate: '2019-06-02',
                expiryDate: null,
                identifier: null,
            },
            expired: null,
        },
    },
    {
        id: 1659,
        name: 'Test Mission (With Approval)',
        status: 'DRAFT',
        completionMessage: null,
        missionDate: '2019-06-01T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190602-072350',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [],
        craftNicknames: [],
        missionCrewDetails: [],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 121,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: null,
        timeOfDay: null,
        missionApproval: null,
        missionWorkflowVersion: {
            id: 121,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: 61,
            additionalAuthorityIds: [],
            workflowName: 'Filled (With Approval)',
            workflowId: 66,
            delegatedAuthority: {
                id: 61,
                authorityType: {
                    id: 1,
                    name: 'Remote Operators Certificate',
                    identifierLabel: 'Certificate Number',
                    personnelRegisterLabel: 'Remote Pilot Register',
                    aircraftRegisterLabel: 'RPA Register',
                    hasExpiry: true,
                    hasAircraftRegister: true,
                    hasPersonnelRegister: true,
                    hasIdentifier: true,
                    hasMultipleInstances: false,
                    abbreviation: 'ReOC',
                    requiresApproval: true,
                },
                organisation: {
                    id: 164,
                    name: 'Dev Business Customer',
                    personalOrganisation: false,
                    arn: null,
                    activeJurisdictions: [
                        {
                            id: 1,
                            name: 'Australia',
                            ansp: null,
                            caa: null,
                            atsb: null,
                        },
                    ],
                },
                startDate: '2019-02-04',
                expiryDate: '2019-12-24',
                identifier: 'ReOc',
            },
            expired: null,
        },
    },
    {
        id: 1660,
        name: 'Test Mission (With Approval)',
        status: 'DRAFT',
        completionMessage: null,
        missionDate: '2019-06-01T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190602-072406',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [181],
        craftNicknames: ['Real RPA (Unservicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 121,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: {
            id: 273,
            status: 'PENDING',
            messageFromApprover: null,
            organisationName: null,
            requestTime: '2019-06-02T07:28:24Z',
            requestedBy: {
                id: 109,
                firstName: 'Own ReOC',
                lastName: 'Admin',
            },
            resolutionTime: null,
            approvedBy: null,
            conditions: [],
        },
        missionWorkflowVersion: {
            id: 121,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: 61,
            additionalAuthorityIds: [],
            workflowName: 'Filled (With Approval)',
            workflowId: 66,
            delegatedAuthority: {
                id: 61,
                authorityType: {
                    id: 1,
                    name: 'Remote Operators Certificate',
                    identifierLabel: 'Certificate Number',
                    personnelRegisterLabel: 'Remote Pilot Register',
                    aircraftRegisterLabel: 'RPA Register',
                    hasExpiry: true,
                    hasAircraftRegister: true,
                    hasPersonnelRegister: true,
                    hasIdentifier: true,
                    hasMultipleInstances: false,
                    abbreviation: 'ReOC',
                    requiresApproval: true,
                },
                organisation: {
                    id: 164,
                    name: 'Dev Business Customer',
                    personalOrganisation: false,
                    arn: null,
                    activeJurisdictions: [
                        {
                            id: 1,
                            name: 'Australia',
                            ansp: null,
                            caa: null,
                            atsb: null,
                        },
                    ],
                },
                startDate: '2019-02-04',
                expiryDate: '2019-12-24',
                identifier: 'ReOc',
            },
            expired: null,
        },
    },
    {
        id: 1661,
        name: 'asdad',
        status: 'COMPLETED',
        completionMessage: 'hh',
        missionDate: '2019-06-01T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: 'asdasd',
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190602-073049',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: 55,
        crewNotes: 'asdasd',
        missionWorkflowVersionId: 125,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 125,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Brand New Empty Workflow2',
            workflowId: 69,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1653,
        name: 'Test Empty (No Primary)',
        status: 'READY_TO_FLY',
        completionMessage: null,
        missionDate: '2019-05-31T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190601-105814',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 117,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 117,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (No Primary)',
            workflowId: 62,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1654,
        name: 'Test Empty (No Primary)',
        status: 'COMPLETED',
        completionMessage: 'fff',
        missionDate: '2019-05-31T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: '',
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190601-111336',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [180],
        craftNicknames: ['Real RPA (Servicable)'],
        missionCrewDetails: [
            {
                person: {
                    id: 97,
                    firstName: 'Anthony',
                    lastName: 'Hopkins',
                    email: 'testing+ownreocpilot@flyfreely.io',
                    phoneNumber: null,
                    arn: null,
                    username: 'testpilot',
                    type: 'USER',
                    personalOrganisationId: null,
                    defaultOrganisationId: null,
                    dateOfBirth: null,
                },
                role: {
                    id: 1,
                    name: 'Remote Pilot in Command',
                    enabled: true,
                    organisationId: null,
                    order: 1,
                    required: true,
                    numberOfInstances: 1,
                    coreRole: 'PILOT_IN_COMMAND',
                },
            },
        ],
        maximumHeight: 2,
        crewNotes: null,
        missionWorkflowVersionId: 117,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: 'VLOS',
        timeOfDay: 'DAY',
        missionApproval: null,
        missionWorkflowVersion: {
            id: 117,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: null,
            additionalAuthorityIds: [],
            workflowName: 'Empty (No Primary)',
            workflowId: 62,
            delegatedAuthority: null,
            expired: null,
        },
    },
    {
        id: 1655,
        name: 'jjhj',
        status: 'DRAFT',
        completionMessage: null,
        missionDate: '2019-05-31T22:00:00Z',
        timeZone: 'Australia/Queensland',
        missionObjective: null,
        missionType: {
            id: 3,
            parentId: null,
            name: 'Commercial',
            description: 'Commercial flights',
            active: true,
            coreType: 'COMMERCIAL',
        },
        uid: '164-20190601-111423',
        locationId: 1175,
        locationName: 'asdasd',
        organisationName: 'Dev Business Customer',
        organisationId: 164,
        craftIds: [],
        craftNicknames: [],
        missionCrewDetails: [],
        maximumHeight: null,
        crewNotes: null,
        missionWorkflowVersionId: 119,
        missionEstimatedTime: 3600,
        isDummy: false,
        visualLineOfSight: null,
        timeOfDay: null,
        missionApproval: null,
        missionWorkflowVersion: {
            id: 119,
            versionNumber: 1,
            mappedForms: {},
            mappedChecklists: {},
            mappedAttachmentRequirements: {},
            availableActions: null,
            delegatedAuthorityId: 61,
            additionalAuthorityIds: [],
            workflowName: 'Empty (With Primary With Approval)',
            workflowId: 64,
            delegatedAuthority: {
                id: 61,
                authorityType: {
                    id: 1,
                    name: 'Remote Operators Certificate',
                    identifierLabel: 'Certificate Number',
                    personnelRegisterLabel: 'Remote Pilot Register',
                    aircraftRegisterLabel: 'RPA Register',
                    hasExpiry: true,
                    hasAircraftRegister: true,
                    hasPersonnelRegister: true,
                    hasIdentifier: true,
                    hasMultipleInstances: false,
                    abbreviation: 'ReOC',
                    requiresApproval: true,
                },
                organisation: {
                    id: 164,
                    name: 'Dev Business Customer',
                    personalOrganisation: false,
                    arn: null,
                    activeJurisdictions: [
                        {
                            id: 1,
                            name: 'Australia',
                            ansp: null,
                            caa: null,
                            atsb: null,
                        },
                    ],
                },
                startDate: '2019-02-04',
                expiryDate: '2019-12-24',
                identifier: 'ReOc',
            },
            expired: null,
        },
    },
]
