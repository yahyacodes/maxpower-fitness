import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ClassSchedule() {
  const schedule = [
    {
      time: "6:00 AM",
      monday: "Yoga",
      tuesday: "HIIT",
      wednesday: "Spin",
      thursday: "Strength",
      friday: "Yoga",
      saturday: "HIIT",
    },
    {
      time: "9:00 AM",
      monday: "Zumba",
      tuesday: "Pilates",
      wednesday: "Boxing",
      thursday: "Zumba",
      friday: "Pilates",
      saturday: "Boxing",
    },
    {
      time: "12:00 PM",
      monday: "Strength",
      tuesday: "Spin",
      wednesday: "Yoga",
      thursday: "HIIT",
      friday: "Boxing",
      saturday: "Strength",
    },
    {
      time: "5:00 PM",
      monday: "HIIT",
      tuesday: "Boxing",
      wednesday: "Strength",
      thursday: "Spin",
      friday: "HIIT",
      saturday: "Spin",
    },
    {
      time: "7:00 PM",
      monday: "Spin",
      tuesday: "Yoga",
      wednesday: "Zumba",
      thursday: "Pilates",
      friday: "Strength",
      saturday: "Zumba",
    },
  ];

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Class Schedule</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead>Monday</TableHead>
                <TableHead>Tuesday</TableHead>
                <TableHead>Wednesday</TableHead>
                <TableHead>Thursday</TableHead>
                <TableHead>Friday</TableHead>
                <TableHead>Saturday</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.time}</TableCell>
                  <TableCell>{row.monday}</TableCell>
                  <TableCell>{row.tuesday}</TableCell>
                  <TableCell>{row.wednesday}</TableCell>
                  <TableCell>{row.thursday}</TableCell>
                  <TableCell>{row.friday}</TableCell>
                  <TableCell>{row.saturday}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
