import PageHeader from "@/components/shared/page-header";
import { ALL_COURSES, COURSES_DATA } from "@/lib/constants";
import CourseList from "./course-list";

export default function CoursesPage() {
    return (
        <>
            <PageHeader
                title="Our Courses"
                subtitle="Find the perfect program to launch your career. We offer a wide range of courses in Nursing, Paramedical, and Skill Development."
            />
            <CourseList allCourses={ALL_COURSES} />
        </>
    );
}
