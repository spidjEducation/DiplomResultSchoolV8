import { fetchOperationDescription, selectOperationDescription, selectOperationDescriptionId, selectOperationDescriptionLoading } from "entities/operation/operationDescripton";
import { OperationView } from "entities/operation/operationtPreview";
import { OperationDelete } from "features/operation/delete";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/lib/store";
import { Loading } from "shared/ui/loading";

export const Operation = () => {
    const { id } = useParams();
    const operation = useAppSelector(selectOperationDescription);
    const currentOperationId = useAppSelector(selectOperationDescriptionId);
    const isLoading = useAppSelector(selectOperationDescriptionLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id && id !== currentOperationId) dispatch(fetchOperationDescription(id));
    }, [currentOperationId, dispatch, id]);

    if (isLoading) {
        return <Loading />;
    }

    return <OperationView operation={operation} deleteSlot={<OperationDelete operationId={operation.id} />} />;
};
