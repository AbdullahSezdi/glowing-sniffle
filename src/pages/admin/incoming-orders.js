import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Modal from "../../components/comment-incoming";

const PageTitle = styled.h1`
  margin-bottom: 20px;
  color: #05153f;
  font-size: 2rem;
  font-weight: 600;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const Column = styled.div`
  padding: 20px 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 7.5px;
  margin-right: 10px;
  margin-left: 3px;
  width: 25%;
  border: 1px solid rgba(5, 21, 63, 0.1882352941);
  @media screen and (max-width: 768px){
    width: 100%
  }
`;

const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  background-color: ${(props) => (props.draggingOver ? "#cdcdcd" : "#white")};
  padding: 5px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Card = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  user-select: "none";
  padding: 15px;
  min-height: "50px";
  border: ${(props) => props.isDragging && "2px dashed #05153f"};
  border-radius: 10px;
`;

const OrderRoomNumber = styled.div`
  color: #25d24b;
  font-weight: 700;
  font-size: 0.95rem;
`;

const OrderCreator = styled.div`
  color: #05153f;
  font-weight: 600;
  font-size: 1.1rem;
`;

const OrderList = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderListItem = styled.span`
  color: #05153f;
  font-size: 0.85rem;
  font-weight: 500;
`;

const OrderComment = styled.div`
  margin-top: 10px;
  color: #05153f;
  font-size: 0.85rem;
  font-style: italic;
`;

const data = [
  {
    id: "1",
    oda: "103",
    kişi: "Eren Saraç",
    orders: ["1 adet Çay", "1 paket Bisküvi", "1 avuç Fıstık"],
    comment: "Çay 10 şekerli olsun",
  },
  {
    id: "10",
    oda: "109",
    kişi: "Abdullah Sezdi",
    orders: ["1 adet çay", " 1 adet Çubuk kraker"],
    comment: "Çubuk kraker susamlı olsun",
  },
  {
    id: "2",
    oda: "104",
    kişi: "Eren Saraç",
    orders: ["Sütlaç", "Bisküvi", "Fıstık"],
    comment: "",
  },
  { id: "3", oda: "342", kişi: "mustafa", orders: ["çay"], comment: "" },
  { id: "4", oda: "123", kişi: "mahmut", orders: ["çay"], comment: "" },
  {
    id: "5",
    oda: "109",
    kişi: "osman",
    orders: ["çay", "bisküvi", "muz"],
    comment: "",
  },
  {
    id: "6",
    oda: "109",
    kişi: "osman",
    orders: ["çay", "bisküvi", "muz"],
    comment: "",
  },
  {
    id: "7",
    oda: "109",
    kişi: "osman",
    orders: ["çay", "bisküvi", "muz"],
    comment: "",
  },
  {
    id: "8",
    oda: "109",
    kişi: "osman",
    orders: ["çay", "bisküvi", "muz"],
    comment: "",
  },
];

const columnsFromBackend = {
  1: { name: "Beklemede", items: data },
  2: { name: "Hazırlamada", items: [] },
  3: { name: "Tamamlandı", items: [] },
  4: { name: "Reddedildi", items: [] },
};

const onDragEnd = (
  result,
  columns,
  setColumns,
  setShowModal,
  cancel,
  setCancel
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    if (destColumn.name === "Reddedildi") {
      setCancel(false);
      setShowModal(true);
      console.log(cancel)    
      
    }const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
    
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default function IncomingOrders() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [showModal, setShowModal] = useState(false);
  const [cancel, setCancel] = useState(true);

  return (
    <>
      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setCancel={setCancel}
          
        />
      ) : null}
      <PageTitle>Gelen Siparişler</PageTitle>
      <ColumnContainer>
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(
              result,
              columns,
              setColumns,
              setShowModal,
              cancel,
              setCancel
            )
          }
        >
        
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Column key={column.columnId}>
                <ColumnTitle>{column.name}</ColumnTitle>
                <Droppable droppableId={columnId} key={column.columnId}>
                  {(provided, snapshot) => {
                    return (
                      <CardContainer
                        draggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    isDragging={snapshot.isDragging}
                                    style={{ ...provided.draggableProps.style }}
                                  >
                                    <OrderRoomNumber>
                                      {item.oda}
                                    </OrderRoomNumber>
                                    <OrderCreator>{item.kişi}</OrderCreator>
                                    <OrderList>
                                      {item.orders.map((product) => (
                                        <OrderListItem>{product}</OrderListItem>
                                      ))}
                                    </OrderList>
                                    <OrderComment>{item.comment}</OrderComment>
                                  </Card>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </CardContainer>
                    );
                  }}
                </Droppable>
              </Column>
            );
          })}
        </DragDropContext>
      </ColumnContainer>
    </>
  );
}
