export type GetObjectIDsOptions = {
    max: number
    departmentIds: number[]
    metadataDate: string | Date
}

export type GetObjectIDsReturnType = {
    total: number
    objectIDs: number[]
}
