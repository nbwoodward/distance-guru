import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TrainingPlanProps {
  distance: string
}

export default function TrainingPlan({distance}: TrainingPlanProps) {


  const schedules = {
    "28k": [
      { day: "Monday", workout: "Rest or Cross-train" },
      { day: "Tuesday", workout: "5 miles with hill repeats" },
      { day: "Wednesday", workout: "6 miles easy pace" },
      { day: "Thursday", workout: "4 miles with speed work" },
      { day: "Friday", workout: "Rest" },
      { day: "Saturday", workout: "12 miles long run on trails" },
      { day: "Sunday", workout: "6 miles easy pace" },
    ],
    "50k": [
      { day: "Monday", workout: "Rest or Cross-train" },
      { day: "Tuesday", workout: "6 miles with hill repeats" },
      { day: "Wednesday", workout: "8 miles easy pace" },
      { day: "Thursday", workout: "5 miles with speed work" },
      { day: "Friday", workout: "Rest" },
      { day: "Saturday", workout: "16 miles long run on trails" },
      { day: "Sunday", workout: "8 miles easy pace (back-to-back long run)" },
    ],
    "100k": [
      { day: "Monday", workout: "Rest or Cross-train" },
      { day: "Tuesday", workout: "8 miles with hill repeats" },
      { day: "Wednesday", workout: "10 miles easy pace" },
      { day: "Thursday", workout: "6 miles with speed work" },
      { day: "Friday", workout: "Rest" },
      { day: "Saturday", workout: "24 miles long run on trails" },
      { day: "Sunday", workout: "12 miles easy pace (back-to-back long run)" },
    ],
  }

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">{distance} Training Plan</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Day</TableHead>
                <TableHead>Workout</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules[distance].map((item) => (
                <TableRow key={item.day}>
                  <TableCell className="font-medium">{item.day}</TableCell>
                  <TableCell>{item.workout}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}
